import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './register.jsx';
import Authentication from './authentication.jsx';
import MainPage from "./mainpage.jsx";
import Profile from "./Profile.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/authentication" element={<Authentication />} />
                <Route path="/profile/:userId" element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;
