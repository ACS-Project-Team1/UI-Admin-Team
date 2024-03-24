import React, { useState,useRef,useEffect } from 'react';
import { Link, Route, useHistory } from 'react-router-dom';
import '../styles/HomePage.css';
import { ReactComponent as GolfLogo } from '../styles/golf-logo.svg';
import { ReactComponent as BellIcon } from '../styles/bell.svg';
import Dashboard from './Dashboard.tsx';

const HomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const history = useHistory();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const handleLogout = () => {
    // Here, perform any logout logic like clearing local storage, tokens, etc.
    history.push('/'); // Redirect to login page
  };
  useEffect(() => {
    // Function to check if click is outside the ref and if so, close the dropdown
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false); // Close the dropdown
      }
    }
  
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  

  return (
    <div className="homepage">
      <header className="header">
        <div className="header-left">
          <GolfLogo />
        </div>
        <h1 className="header-title">Fairway Focus</h1>
        <div className="header-right">
          <BellIcon className="notification-icon" />
          <div className="profile" onClick={() => setShowDropdown(!showDropdown)}>
            Profile
            {showDropdown && (
              <div className="profile-dropdown" ref={dropdownRef}>
                <Link to="/edit-profile">Edit Profile</Link>
                <div onClick={handleLogout}>Logout</div>
              </div>
            )}
          </div>
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
          {/* Other routes */}
        </main>
      </div>
    </div>
  );
};

export default HomePage;
