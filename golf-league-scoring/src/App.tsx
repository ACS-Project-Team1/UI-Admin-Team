import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login.tsx';
import Signup from './components/Signup.tsx';
import Dashboard from './components/Dashboard.tsx';
import PlayerManagement from './components/PlayerManagement.tsx';
import EventManagement from './components/EventManagement.tsx';
import './App.css';

function App() {
  const handleLogin = (username: string) => {
    alert(`Login successful! Welcome, ${username}!`);
  };

  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/playermanagement" component={PlayerManagement} />
          <Route path="/eventmanagement" component={EventManagement} /> 
          <Route
            path="/"
            render={(props) => <Login onLogin={handleLogin} {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
