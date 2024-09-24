import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faTools, faTruck, faBroom, faLaptop, faCamera, faCode, faBullhorn, faPaintBrush, faHeadset, faMobileAlt, faSpa, faGavel, faCar, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './css/AllTasks.css';
import Header from "./Header.jsx";
import Logo from "./logo.jsx";

const categoryIcons = {
    'Courier Services': faShippingFast,
    'Repair and Construction': faTools,
    'Cargo Transportation': faTruck,
    'Cleaning and Household Help': faBroom,
    'Computer Help': faLaptop,
    'Photo, Video, and Audio': faCamera,
    'Software Development': faCode,
    'Installation and Repair of Equipment': faTools,
    'Events and Promotions': faBullhorn,
    'Design': faPaintBrush,
    'Virtual Assistant': faHeadset,
    'Repair of Digital Equipment': faMobileAlt,
    'Beauty and Health': faSpa,
    'Legal and Accounting Help': faGavel,
    'Vehicle Repair': faCar,
    'Tutors and Education': faChalkboardTeacher,
};

function AllTasks() {
    const [tasks, setTasks] = useState([]); // Создание состояния для хранения всех задач.
    const [searchQuery, setSearchQuery] = useState(''); // Создание состояния для хранения поискового запроса.

    useEffect(() => {
        // Выполнение HTTP-запроса для получения всех задач с сервера при монтировании компонента.
        fetch('http://localhost:8080/api/v1/task/alltasks')
            .then(response => response.json()) // Преобразование ответа в формат JSON.
            .then(data => setTasks(data)) // Сохранение полученных задач в состояние tasks.
            .catch(error => console.error('Error fetching tasks:', error)); // Обработка ошибки при запросе.
    }, []); // Пустой массив зависимостей означает, что эффект выполнится только при первом рендере.

    const filteredTasks = tasks.filter(task =>
        // Фильтрация задач по поисковому запросу.
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) || // Проверка наличия запроса в заголовке задачи.
        task.description.toLowerCase().includes(searchQuery.toLowerCase()) // Проверка наличия запроса в описании задачи.
    );

    return (
        <div className="all-tasks-page">
            <Logo/>
            <Header />
            <div className="all-tasks-hero">
                <h1>All Tasks:</h1>
                <div className="all-tasks-search-container">
                    <div className="all-tasks-search">
                        <label htmlFor="search">Service or Specialist:</label>
                        <input
                            type="text" // Поле ввода текста для поискового запроса.
                            id="search"
                            placeholder="Search by title or description"
                            value={searchQuery} // Связывание значения поля ввода с состоянием searchQuery.
                            onChange={(e) => setSearchQuery(e.target.value)} // Обновление состояния searchQuery при изменении текста в поле ввода.
                        />
                        <button>Search</button>
                    </div>
                </div>
                <p className="all-tasks-task-count">Found {filteredTasks.length} tasks</p>
                {/* Отображение количества найденных задач, основанное на отфильтрованном списке. */}
            </div>

            <div className="all-tasks-container">
                {filteredTasks.length > 0 ? ( // Проверка наличия отфильтрованных задач для отображения.
                    <ul className="all-tasks-list">
                        {filteredTasks.map((task, index) => (
                            <li key={index} className="all-tasks-item">
                                <div className="all-tasks-icon">
                                    <FontAwesomeIcon icon={categoryIcons[task.category]} />
                                </div>
                                <div className="all-tasks-content">
                                    <div className="all-tasks-title-budget">
                                        <h3>{task.title}</h3> {/* Отображение заголовка задачи. */}
                                        <p className="budget">Up to: {task.budget} €</p> {/* Отображение бюджета задачи. */}
                                    </div>
                                    <p>{task.description}</p> {/* Отображение описания задачи. */}
                                    <p className="date">Start {task.deadline}</p> {/* Отображение даты начала задачи. */}
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No tasks available.</p> // Сообщение, если задачи не найдены.
                )}
            </div>
        </div>
    );
}

export default AllTasks;
