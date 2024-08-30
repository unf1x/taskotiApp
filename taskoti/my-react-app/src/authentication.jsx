import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Импортируйте useNavigate
import './authentication.css';
import { handleAuthenticationSubmit } from './authentication.js';
import Logo from "./logo.jsx"; // Импорт логики из authentication.js

function Authentication() {
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Получить функцию навигации

    const handleSubmit = (event) => {
        handleAuthenticationSubmit(event, setMessage, navigate); // Передайте navigate
    };

    return (
        <div className="container">
            <Logo />
            <div className="wrapper">
                <div className="title">
                    <span>Authentication Form</span>
                </div>
                <form id="authenticationForm" onSubmit={handleSubmit}>
                    <div className="row">
                        <label htmlFor="email"></label>
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="row">
                        <label htmlFor="password"></label>
                        <input type="password" id="password" name="password" placeholder="Password" required />
                    </div>
                    <div className="row button">
                        <input type="submit" value="Log in" />
                    </div>
                    <div id="authenticationResponse" className="error-message">{message}</div>
                </form>
                <div className="login-link">
                    <p>Нет аккаунта? </p>
                    <Link to="/register">Создать аккаунт</Link> {/* Использование Link для навигации */}
                </div>
            </div>
        </div>
    );
}

export default Authentication;
