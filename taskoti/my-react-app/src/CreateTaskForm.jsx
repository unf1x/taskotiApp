import React, { useState } from 'react';
import './CreateTaskForm.css'; // Подключение CSS файла
import Logo from './logo'; // Импорт логотипа

function CreateTaskForm({ category }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [budget, setBudget] = useState([0, 1000]); // Диапазон от 0 до 1000

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, description, deadline, budget, category });
    };

    const handleMinBudgetChange = (e) => {
        const newMinBudget = +e.target.value;
        if (newMinBudget <= budget[1]) {
            setBudget([newMinBudget, budget[1]]);
        }
    };

    const handleMaxBudgetChange = (e) => {
        const newMaxBudget = +e.target.value;
        if (newMaxBudget >= budget[0]) {
            setBudget([budget[0], newMaxBudget]);
        }
    };

    return (
        <>
            <Logo className="page-logo" /> {/* Логотип вынесен за пределы формы */}
            <div className="create-task-form">
                <h2>Create Task</h2>
                <form onSubmit={handleSubmit}>
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
                                <label htmlFor="min-budget">From:</label>
                                <input
                                    type="range"
                                    value={budget[0]}
                                    onChange={handleMinBudgetChange}
                                    min="0"
                                    max={budget[1]}
                                    step="10"
                                    className="slider"
                                    id="min-budget"
                                />
                                <label htmlFor="max-budget">To:</label>
                                <input
                                    type="range"
                                    value={budget[1]}
                                    onChange={handleMaxBudgetChange}
                                    min={budget[0]}
                                    max="1000"
                                    step="10"
                                    className="slider"
                                    id="max-budget"
                                />
                            </div>
                            <div className="budget-values">
                                <span>{budget[0]} <span className="euro-symbol">€</span></span>
                                <span>{budget[1]} <span className="euro-symbol">€</span></span>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="create-task-button">Create Task</button>
                </form>
            </div>
        </>
    );
}

export default CreateTaskForm;
