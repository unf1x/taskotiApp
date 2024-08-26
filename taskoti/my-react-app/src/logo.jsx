import React from 'react';
import { Link } from 'react-router-dom';
import './logo.css';


const Logo = () => {
    return (
        <div className="logo-container">
            <Link to="/">
                <img src="/logo.webp" alt="Logo" className="logo" />
            </Link>
        </div>
    );
};

export default Logo;
