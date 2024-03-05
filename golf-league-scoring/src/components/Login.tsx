import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Login.css';

interface LoginProps {
    onLogin: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const history = useHistory(); 

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        history.push('/dashboard');
        // onLogin(username);

        /*if (username && password) {
            setErrorMessage('');

            // Create an object with the user data
            const userData = {
                username,
                password,
            };

            try {
                // Make a POST request to your API endpoint for login verification
                const response = await fetch('https://your-api-endpoint.com/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                });

                if (response.ok) {
                    // API call successful, handle any additional logic if needed
                    onLogin(username);
                } else {
                    // Handle errors from the API
                    setErrorMessage('Invalid username or password. Please try again.');
                }
            } catch (error) {
                console.error('Error during login:', error);
                setErrorMessage('An unexpected error occurred. Please try again.');
            }
        } else {
            setErrorMessage('Username and password are required.');
        }*/
    };

    return (
        <div className="login-container">
            <h1 className='loginh1'>Golf Admin Login</h1>
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
