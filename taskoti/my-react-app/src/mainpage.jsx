import React from 'react';
import { Link } from 'react-router-dom';
import './mainpage.css'; // Подключение CSS файла
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faTools, faTruck, faBroom, faLaptop, faCamera, faCode, faBullhorn, faPaintBrush, faHeadset, faMobileAlt, faSpa, faGavel, faCar, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

function MainPage() {
    return (
        <div>
            <header>
                <nav>
                    <div className="nav-left">
                        <Link to="/create-task" className="btn">Create Task</Link>
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
