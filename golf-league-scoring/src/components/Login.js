// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import '../styles/Login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if (username && password) {
            setErrorMessage('');
            onLogin(username); // Pass the username to the parent component
        } else {
            setErrorMessage('Username and password are required.');
        }
    };

    return (
        <div className="login-container">
            <h1>Golf Admin Login</h1>
            <div className="login-form">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                />

                <button onClick={handleLogin}>Login</button>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <div className="additional-links">
                    <Link to="/forgot-password">Forgot Password</Link>
                    <span> | </span>
                    <Link to="/signup">Create Account</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
