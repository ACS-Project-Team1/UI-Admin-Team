import React from 'react';
import { Link,Route } from 'react-router-dom';
import '../styles/HomePage.css';
import { ReactComponent as GolfLogo } from '../styles/golf-logo.svg';
import { ReactComponent as BellIcon } from '../styles/bell.svg';
import Dashboard from './Dashboard.tsx';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="header-left">
          <GolfLogo />
        </div>
        <h1 className="header-title">Fairway Focus</h1>
        <div className="header-right">
          <BellIcon className="notification-icon" />
          <div className="profile">Admin Profile</div>
        </div>
      </header>
      <div className="content-area">
        <aside className="sidebar">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/team-management">Team Management</Link>
          <Link to="/data-management">Data Management</Link>
          <Link to="/event-management">Event Management</Link>
          <Link to="/csv-upload">CSV Data Upload</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/help">Help & Feedback</Link>
        </aside>
        <main className="main-content">
          <p>Welcome to the Golf League Admin Dashboard!</p>
          <Route exact path='/dashboard' component={Dashboard} />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
