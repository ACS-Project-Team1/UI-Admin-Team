import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login.tsx";
import Signup from "./components/Signup.tsx";
import HomePage from "./components/HomePage.tsx"; // Main HomePage component after login
import "./App.css";

function App() {
  const handleLogin = (username: string) => {
    alert(`Login successful! Welcome, ${username}!`);
  };

  return (
    <Router>
      <Switch>
        {/* Direct authenticated users to HomePage */}
        <Route path="/home" exact>
          <HomePage />
        </Route>
        {/* Signup route */}
        <Route path="/signup" component={Signup} />
        {/* Default path for login, assuming it's the entry point for unauthenticated users */}
        <Route path="/" exact>
          <Login onLogin={handleLogin} />
        </Route>
        {/* Redirect any other path back to the homepage or a 404 page if you prefer */}
        <Route path="*">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
