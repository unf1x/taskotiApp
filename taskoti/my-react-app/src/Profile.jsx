import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './css/Profile.css';
import Logo from "./logo.jsx";

function Profile() {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [bio, setBio] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/user/${userId}`)
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setBio(data.bio || '');
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [userId]);

    const handleSaveBio = () => {
        fetch(`http://localhost:8080/api/v1/user/${userId}/bio`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ bio })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update bio');
                }
                return response.json();
            })
            .then(updatedUser => {
                setUser(updatedUser);
                setShowSuccess(true); // Показать сообщение об успешном обновлении
                setTimeout(() => {
                    setShowSuccess(false); // Скрыть сообщение после 3 секунд
                }, 3000);
            })
            .catch(error => {
                console.error('Error updating bio:', error);
            });
    };

    const handleCancel = () => {
        setBio(user.bio || '');
    };

    if (!user) {
        return <div className="profile-container">No such user</div>;
    }

    return (
        <div>
            <header className="header-logo">
                <Logo />
            </header>
            <div className="profile-container">
                <div className="profile-header">
                    <h2>Personal Data</h2>
                    {user.profilePicture && <img src={user.profilePicture} alt={`${user.fullName}'s profile`} className="profile-picture" />}
                </div>
                <div className="profile-details">
                    <p><strong>Name:</strong> {user.fullName}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Bio:</strong></p>
                    <textarea
                        className="bio-input"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        rows="4"
                        cols="50"
                        placeholder="Enter your bio here..."
                    />
                    <div className="profile-buttons">
                        <button className="save-btn" onClick={handleSaveBio}>Save</button>
                        <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
                <div className="profile-actions">
                    <button className="logout-button" onClick={() => {
                        localStorage.removeItem('token');
                        localStorage.removeItem('userId');
                        navigate('/authentication');
                    }}>
                        Logout
                    </button>
                </div>
            </div>
            {showSuccess && (
                <div className="success-message">Changes saved successfully!</div>
            )}
        </div>
    );
}

export default Profile;
