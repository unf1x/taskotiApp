import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './mainpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faTools, faTruck, faBroom, faLaptop, faCamera, faCode, faBullhorn, faPaintBrush, faHeadset, faMobileAlt, faSpa, faGavel, faCar, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import Logo from "./logo.jsx";

function MainPage() {
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
        <div>
            <header>
                <Logo />
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
                        <Link to="/find-tasks" className="btn">Find Tasks</Link>
                    </div>
                    <div className="nav-right">
                        <Link to="/register" className="btn">Register</Link>
                        <Link to="/authentication" className="btn">Login</Link>
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
                        <button onClick={() => handleCategoryClick('Courier Services')}><FontAwesomeIcon icon={faShippingFast} /> Courier Services</button>
                        <button onClick={() => handleCategoryClick('Repair and Construction')}><FontAwesomeIcon icon={faTools} /> Repair and Construction</button>
                        <button onClick={() => handleCategoryClick('Cargo Transportation')}><FontAwesomeIcon icon={faTruck} /> Cargo Transportation</button>
                        <button onClick={() => handleCategoryClick('Cleaning and Household Help')}><FontAwesomeIcon icon={faBroom} /> Cleaning and Household Help</button>
                        <button onClick={() => handleCategoryClick('Computer Help')}><FontAwesomeIcon icon={faLaptop} /> Computer Help</button>
                        <button onClick={() => handleCategoryClick('Photo, Video, and Audio')}><FontAwesomeIcon icon={faCamera} /> Photo, Video, and Audio</button>
                    </div>
                    <div className="grid-column">
                        <button onClick={() => handleCategoryClick('Software Development')}><FontAwesomeIcon icon={faCode} /> Software Development</button>
                        <button onClick={() => handleCategoryClick('Installation and Repair of Equipment')}><FontAwesomeIcon icon={faTools} /> Installation and Repair of Equipment</button>
                        <button onClick={() => handleCategoryClick('Events and Promotions')}><FontAwesomeIcon icon={faBullhorn} /> Events and Promotions</button>
                        <button onClick={() => handleCategoryClick('Design')}><FontAwesomeIcon icon={faPaintBrush} /> Design</button>
                        <button onClick={() => handleCategoryClick('Virtual Assistant')}><FontAwesomeIcon icon={faHeadset} /> Virtual Assistant</button>
                    </div>
                    <div className="grid-column">
                        <button onClick={() => handleCategoryClick('Repair of Digital Equipment')}><FontAwesomeIcon icon={faMobileAlt} /> Repair of Digital Equipment</button>
                        <button onClick={() => handleCategoryClick('Beauty and Health')}><FontAwesomeIcon icon={faSpa} /> Beauty and Health</button>
                        <button onClick={() => handleCategoryClick('Legal and Accounting Help')}><FontAwesomeIcon icon={faGavel} /> Legal and Accounting Help</button>
                        <button onClick={() => handleCategoryClick('Vehicle Repair')}><FontAwesomeIcon icon={faCar} /> Vehicle Repair</button>
                        <button onClick={() => handleCategoryClick('Tutors and Education')}><FontAwesomeIcon icon={faChalkboardTeacher} /> Tutors and Education</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
