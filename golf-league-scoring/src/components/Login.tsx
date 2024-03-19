import React, { useState, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/Login.css";

interface LoginProps {
  onLogin: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const history = useHistory();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    if (username && password) {
      setErrorMessage("");

      const userData = {
        email: username,
        password,
      };

      try {
        const response = await fetch("http://localhost:8080/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        if (response.ok) {
          // API call successful, handle any additional logic if needed
          onLogin(username);
          history.push("/dashboard");
        } else {
          // Handle errors from the API
          setErrorMessage("Invalid username or password. Please try again.");
        }
      } catch (error) {
        console.error("Error during login:", error);
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } else {
      setErrorMessage("Username and password are required.");
    }
  };

  return (
    <div className="login-container">
      <h1 className="loginh1">Golf Admin Login</h1>
      <div className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
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
