import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/header.css'; // Импортируйте CSS только здесь
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faTools, faTruck, faBroom, faLaptop, faCamera, faCode, faBullhorn, faPaintBrush, faHeadset, faMobileAlt, faSpa, faGavel, faCar, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import Logo from "./logo.jsx";

function Header() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    const handleCategoryClick = (category) => {
        navigate('/create-task', { state: { category } });
    };

    return (
        <header>
            <nav>
                <div className="nav-left">
                    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Link to="#" className="btn">Create Task</Link>
                        {isDropdownVisible && (
                            <div className="dropdown-menu">
                                <button onClick={() => handleCategoryClick('Courier Services')}>Courier Services</button>
                                <button onClick={() => handleCategoryClick('Repair and Construction')}>Repair and Construction</button>
                                <button onClick={() => handleCategoryClick('Cargo Transportation')}>Cargo Transportation</button>
                                <button onClick={() => handleCategoryClick('Cleaning and Household Help')}>Cleaning and Household Help</button>
                                <button onClick={() => handleCategoryClick('Computer Help')}>Computer Help</button>
                                <button onClick={() => handleCategoryClick('Photo, Video, and Audio')}>Photo, Video, and Audio</button>
                                <button onClick={() => handleCategoryClick('Software Development')}>Software Development</button>
                                <button onClick={() => handleCategoryClick('Installation and Repair of Equipment')}>Installation and Repair of Equipment</button>
                                <button onClick={() => handleCategoryClick('Events and Promotions')}>Events and Promotions</button>
                                <button onClick={() => handleCategoryClick('Design')}>Design</button>
                                <button onClick={() => handleCategoryClick('Virtual Assistant')}>Virtual Assistant</button>
                                <button onClick={() => handleCategoryClick('Repair of Digital Equipment')}>Repair of Digital Equipment</button>
                                <button onClick={() => handleCategoryClick('Beauty and Health')}>Beauty and Health</button>
                                <button onClick={() => handleCategoryClick('Legal and Accounting Help')}>Legal and Accounting Help</button>
                                <button onClick={() => handleCategoryClick('Vehicle Repair')}>Vehicle Repair</button>
                                <button onClick={() => handleCategoryClick('Tutors and Education')}>Tutors and Education</button>
                            </div>
                        )}
                    </div>
                    <Link to="/all-tasks" className="btn">Find Tasks</Link>
                </div>
                <div className="nav-right">
                    <Link to="/register" className="btn">Register</Link>
                    <Link to="/authentication" className="btn">Login</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
