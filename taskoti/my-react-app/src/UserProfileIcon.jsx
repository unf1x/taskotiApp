import React, { useState, useEffect } from 'react';

function UserProfileIcon() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Получаем имя пользователя из localStorage
        const storedUserName = localStorage.getItem('userName');
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);

    return (
        <div className="user-profile-icon">
            {userName ? (
                <span>{userName}</span>
            ) : (
                <span>Guest</span>
            )}
        </div>
    );
}

export default UserProfileIcon;
