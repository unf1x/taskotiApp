import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './mainpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faTools, faTruck, faBroom, faLaptop, faCamera, faCode, faBullhorn, faPaintBrush, faHeadset, faMobileAlt, faSpa, faGavel, faCar, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import Logo from "./logo.jsx";

function MainPage() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

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
                                    <Link to="/create-task"> Courier Services</Link>
                                    <Link to="/create-task"> Repair and Construction</Link>
                                    <Link to="/create-task"> Cargo Transportation</Link>
                                    <Link to="/create-task"> Cleaning and Household Help</Link>
                                    <Link to="/create-task"> Computer Help</Link>
                                    <Link to="/create-task"> Photo, Video, and Audio</Link>
                                    <Link to="/create-task"> Software Development</Link>
                                    <Link to="/create-task"> Installation and Repair of Equipment</Link>
                                    <Link to="/create-task"> Events and Promotions</Link>
                                    <Link to="/create-task"> Design</Link>
                                    <Link to="/create-task"> Virtual Assistant</Link>
                                    <Link to="/create-task"> Repair of Digital Equipment</Link>
                                    <Link to="/create-task"> Beauty and Health</Link>
                                    <Link to="/create-task"> Legal and Accounting Help</Link>
                                    <Link to="/create-task"> Vehicle Repair</Link>
                                    <Link to="/create-task"> Tutors and Education</Link>
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
                        <Link to="/create-task"><FontAwesomeIcon icon={faShippingFast} /> Courier Services</Link>
                        <Link to="/create-task"><FontAwesomeIcon icon={faTools} /> Repair and Construction</Link>
                        <Link to="/create-task"><FontAwesomeIcon icon={faTruck} /> Cargo Transportation</Link>
                        <Link to="/create-task"><FontAwesomeIcon icon={faBroom} /> Cleaning and Household Help</Link>
                        <Link to="/create-task"><FontAwesomeIcon icon={faLaptop} /> Computer Help</Link>
                        <Link to="/create-task"><FontAwesomeIcon icon={faCamera} /> Photo, Video, and Audio</Link>
                    </div>
                    <div className="grid-column">
                        <Link to="/create-task"><FontAwesomeIcon icon={faCode} /> Software Development</Link>
                        <Link to="/create-task"><FontAwesomeIcon icon={faTools} /> Installation and Repair of Equipment</Link>
                        <Link to="/create-task"><FontAwesomeIcon icon={faBullhorn} /> Events and Promotions</Link>
                        <Link to="/create-task"><FontAwesomeIcon icon={faPaintBrush} /> Design</Link>
                        <Link to="/create-task"><FontAwesomeIcon icon={faHeadset} /> Virtual Assistant</Link>
                    </div>
                    <div className="grid-column">
                        <Link to="/create-task"><FontAwesomeIcon icon={faMobileAlt} /> Repair of Digital Equipment</Link>
                        <Link to="/create-task"><FontAwesomeIcon icon={faSpa} /> Beauty and Health</Link>
                        <Link to="/create-task"><FontAwesomeIcon icon={faGavel} /> Legal and Accounting Help</Link>
                        <Link to="/create-task"><FontAwesomeIcon icon={faCar} /> Vehicle Repair</Link>
                        <Link to="/create-task"><FontAwesomeIcon icon={faChalkboardTeacher} /> Tutors and Education</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
