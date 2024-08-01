import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css'; // Подключение CSS файла
import { handleSubmit } from './register.js'; // Импорт логики из register.js

function Register() {
    const [responseMessage, setResponseMessage] = useState('');
    const [isError, setIsError] = useState(false);

    return (
        <div className="container">
            <div className="wrapper">
                <div className="title">
                    <span>Registration Form</span>
                </div>
                <form id="registerForm" onSubmit={(event) => handleSubmit(event, setResponseMessage, setIsError)}>
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
                    <p>Уже зарегистрированы? </p>
                    <Link to="/authentication">Войти</Link> {}
                </div>
            </div>
        </div>
    );
}

export default Register;
