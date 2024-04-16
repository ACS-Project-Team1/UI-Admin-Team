import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login.tsx";
import Signup from "./components/Signup.tsx";
import HomePage from "./components/HomePage.tsx"; // Main HomePage component after login
import "./App.css";
import EditProfile from "./components/EditProfile.tsx";
import ViewProfile from "./components/ViewProfile.tsx";

function App() {
  const handleLogin = (username: string) => {
    alert(`Login successful! Welcome, ${username}!`);
  };

  return (
    <Router>
      <Switch>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/signup" component={Signup} />
        <Route path="/login" exact>
          <Login onLogin={handleLogin} />
        </Route>
        <Route exact path="/edit-profile" component={EditProfile} />
        <Route exact path="/view-profile" component={ViewProfile} />
        <Route path="/">
          <HomePage />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
