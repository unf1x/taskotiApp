import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './css/CreateTaskForm.css'; // Подключение CSS файла
import Logo from './logo'; // Импорт логотипа

function CreateTaskForm() {
    const location = useLocation();
    const [title, setTitle] = useState(location.state?.title || '');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [budget, setBudget] = useState(1000); // Верхняя граница бюджета
    const [status, setStatus] = useState(''); // Для отображения статуса отправки формы
    const [category, setCategory] = useState(location.state?.category || '');

    const categories = [
        'Courier Services',
        'Repair and Construction',
        'Cargo Transportation',
        'Cleaning and Household Help',
        'Computer Help',
        'Photo, Video, and Audio',
        'Software Development',
        'Installation and Repair of Equipment',
        'Events and Promotions',
        'Design',
        'Virtual Assistant',
        'Repair of Digital Equipment',
        'Beauty and Health',
        'Legal and Accounting Help',
        'Vehicle Repair',
        'Tutors and Education'
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const taskData = {
            title,
            description,
            deadline,
            budget, // Отправляем только верхнюю границу
            category,
        };

        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:8080/api/v1/task/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(taskData),
            });

            if (response.ok) {
                setStatus('Task created successfully!');
            } else {
                setStatus('Failed to create task.');
            }
        } catch (error) {
            setStatus('An error occurred while creating the task.');
            console.error('Error:', error);
        }
    };

    const handleBudgetChange = (e) => {
        setBudget(+e.target.value);
    };

    return (
        <>
            <Logo className="page-logo" /> {}
            <div className="create-task-form">
                <h2>Create Task</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Category:</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Deadline:</label>
                        <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Budget:</label>
                        <div className="budget-slider">
                            <div className="slider-container">
                                <label htmlFor="budget">Up to:</label>
                                <input
                                    type="range"
                                    value={budget}
                                    onChange={handleBudgetChange}
                                    min="0"
                                    max="1000"
                                    step="10"
                                    className="slider"
                                    id="budget"
                                />
                            </div>
                            <div className="budget-values">
                                <span>Up to {budget} <span className="euro-symbol">€</span></span>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="create-task-button">Create Task</button>
                </form>
                {status && <p className="status-message">{status}</p>} {/* Отображение статуса отправки */}
            </div>
        </>
    );
}

export default CreateTaskForm;
