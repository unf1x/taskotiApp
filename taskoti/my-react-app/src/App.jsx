import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './register.jsx';
import Authentication from './authentication.jsx';
import MainPage from "./mainpage.jsx";
import Profile from "./Profile.jsx";
import CreateTaskForm from './CreateTaskForm';

function App() {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/authentication" element={<Authentication />} />
                    <Route path="/profile/:userId" element={<Profile />} />
                    <Route path="/create-task" element={<CreateTaskForm />} />
                </Routes>
            </Router>
    );
}

export default App;
