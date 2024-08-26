import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Profile.css'; // Подключаем стили

function Profile() {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Запрашиваем данные пользователя по userId
        fetch(`http://localhost:8080/api/v1/user/${userId}`)
            .then(response => response.json()) // Преобразуем ответ в JSON
            .then(data => setUser(data)) // Сохраняем полученные данные в состоянии
            .catch(error => console.error('Error fetching user data:', error)); // Ловим ошибки
    }, [userId]);

    // Функция выхода из аккаунта
    const handleLogout = () => {
        localStorage.removeItem('token'); // Удаляем токен из localStorage
        localStorage.removeItem('userId'); // Удаляем userId из localStorage
        navigate('/authentication'); // Перенаправляем на страницу авторизации
    };

    // Пока данные пользователя не загружены, показываем сообщение "No such user"
    if (!user) {
        return <div className="profile-container">No such user</div>;
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1>{user.fullName}</h1>
                {user.profilePicture && <img src={user.profilePicture} alt={`${user.fullName}'s profile`} className="profile-picture" />}
            </div>
            <div className="profile-details">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Bio:</strong> {user.bio || 'No bio available'}</p>
                <p><strong>Member since:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
            {/* Кнопка выхода из аккаунта */}
            <button className="logout-button" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default Profile;
