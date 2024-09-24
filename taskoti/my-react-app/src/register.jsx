import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/register.css'; // Подключение CSS файла
import { handleSubmit } from './register.js'; // Импорт логики из register.js
import Logo from "./logo.jsx";

function Register() {
    const [responseMessage, setResponseMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate(); // Получить функцию навигации

    // Обработка отправки формы
    const handleFormSubmit = (event) => {
        handleSubmit(event, setResponseMessage, setIsError, navigate); // Передайте navigate
    };

    return (
        <div className="container">
            <Logo />
            <div className="wrapper">
                <div className="title">
                    <span>Registration Form</span>
                </div>
                <form id="registerForm" onSubmit={handleFormSubmit}>
                    <div className="row">
                        <label htmlFor="fullName"></label>
                        <input type="text" id="fullName" name="fullName" placeholder="Full Name" required />
                    </div>
                    <div className="row">
                        <label htmlFor="email"></label>
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="row">
                        <label htmlFor="password"></label>
                        <input type="password" id="password" name="password" placeholder="Password" required />
                    </div>
                    <div className="row button">
                        <input type="submit" value="Register" />
                    </div>
                    <div id="registerResponse" className={isError ? 'error-message' : ''}>
                        {responseMessage}
                    </div>
                </form>
                <div className="login-link">
                    <p>Already have an account?</p>
                    <Link to="/authentication">Log in</Link> {/* Использование Link для навигации */}
                </div>
            </div>
        </div>
    );
}

export default Register;
