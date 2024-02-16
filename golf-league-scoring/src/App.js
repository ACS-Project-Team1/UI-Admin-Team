import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';
import './App.css';

function App() {
  const handleLogin = (username) => {
    // Implement your login logic here
    alert(`Login successful! Welcome, ${username}!`);
  };

  return (
    <Router>
      <div className="app-container">
        <Login onLogin={handleLogin} />
      </div>
    </Router>
  );
}

export default App;
