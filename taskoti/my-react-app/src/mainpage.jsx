import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './mainpage.css'; // Подключение CSS файла
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faTools, faTruck, faBroom, faLaptop, faCamera, faCode, faBullhorn, faPaintBrush, faHeadset, faMobileAlt, faSpa, faGavel, faCar, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import Logo from "./logo.jsx";

function MainPage() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    // Получаем токен и данные пользователя из localStorage
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const fullName = localStorage.getItem('fullName');

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <div>
            <header>
                <Logo />
                <nav>
                    <div className="nav-left">
                        <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <Link to="#" className="btn">Create Task</Link>
                            {isDropdownVisible && (
                                <div className="dropdown-menu">
                                    <Link to="#"> Courier Services</Link>
                                    <Link to="#"> Repair and Construction</Link>
                                    <Link to="#"> Cargo Transportation</Link>
                                    <Link to="#"> Cleaning and Household Help</Link>
                                    <Link to="#"> Computer Help</Link>
                                    <Link to="#"> Photo, Video, and Audio</Link>
                                    <Link to="#"> Software Development</Link>
                                    <Link to="#"> Installation and Repair of Equipment</Link>
                                    <Link to="#"> Events and Promotions</Link>
                                    <Link to="#"> Design</Link>
                                    <Link to="#"> Virtual Assistant</Link>
                                    <Link to="#"> Repair of Digital Equipment</Link>
                                    <Link to="#"> Beauty and Health</Link>
                                    <Link to="#"> Legal and Accounting Help</Link>
                                    <Link to="#"> Vehicle Repair</Link>
                                    <Link to="#"> Tutors and Education</Link>
                                </div>
                            )}
                        </div>
                        <Link to="/find-tasks" className="btn">Find Tasks</Link>
                    </div>
                    <div className="nav-right">
                        {/* Если пользователь не авторизован, показываем Register и Login */}
                        {!token ? (
                            <>
                                <Link to="/register" className="btn">Register</Link>
                                <Link to="/authentication" className="btn">Login</Link>
                            </>
                        ) : (
                            // Если авторизован, показываем приветствие и ссылку на профиль
                            <>
                                <span className="welcome-message">Welcome, {fullName || 'User'}</span>
                                <Link to={`/profile/${userId}`} className="btn">Profile</Link>
                            </>
                        )}
                    </div>
                </nav>
            </header>

            <div className="hero">
                <h1>We Take Care of Your Worries</h1>
                <p>We help you find a reliable performer for any task</p>
                <div className="search">
                    <label htmlFor="search">Service or Specialist:</label>
                    <input type="text" id="search" placeholder="For example, window cleaning" />
                    <button>Find</button>
                </div>
            </div>

            <div className="categories">
                <h2>Categories</h2>
                <div className="grid-container">
                    <div className="grid-column">
                        <Link to="#"><FontAwesomeIcon icon={faShippingFast} /> Courier Services</Link>
                        <Link to="#"><FontAwesomeIcon icon={faTools} /> Repair and Construction</Link>
                        <Link to="#"><FontAwesomeIcon icon={faTruck} /> Cargo Transportation</Link>
                        <Link to="#"><FontAwesomeIcon icon={faBroom} /> Cleaning and Household Help</Link>
                        <Link to="#"><FontAwesomeIcon icon={faLaptop} /> Computer Help</Link>
                        <Link to="#"><FontAwesomeIcon icon={faCamera} /> Photo, Video, and Audio</Link>
                    </div>
                    <div className="grid-column">
                        <Link to="#"><FontAwesomeIcon icon={faCode} /> Software Development</Link>
                        <Link to="#"><FontAwesomeIcon icon={faTools} /> Installation and Repair of Equipment</Link>
                        <Link to="#"><FontAwesomeIcon icon={faBullhorn} /> Events and Promotions</Link>
                        <Link to="#"><FontAwesomeIcon icon={faPaintBrush} /> Design</Link>
                        <Link to="#"><FontAwesomeIcon icon={faHeadset} /> Virtual Assistant</Link>
                    </div>
                    <div className="grid-column">
                        <Link to="#"><FontAwesomeIcon icon={faMobileAlt} /> Repair of Digital Equipment</Link>
                        <Link to="#"><FontAwesomeIcon icon={faSpa} /> Beauty and Health</Link>
                        <Link to="#"><FontAwesomeIcon icon={faGavel} /> Legal and Accounting Help</Link>
                        <Link to="#"><FontAwesomeIcon icon={faCar} /> Vehicle Repair</Link>
                        <Link to="#"><FontAwesomeIcon icon={faChalkboardTeacher} /> Tutors and Education</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
