import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/Dashboard.css'; // Import your CSS file

interface DashboardProps {
  onDashboard: (username: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onDashboard }) => {
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="dashboard">
      <div className="user-box" onClick={toggleDropdown}>
        <img src="https://www.golfleaguetracker.com/glthome/images/golf-league-tracker-rectangle-color-2013.png" alt="User Image" className="user-img" />
        <div className="user-info">
          <p>Username</p>
        </div>
        {/* Profile dropdown menu */}
        {showDropdown && (
          <div className="dropdown-menu">
            <ul>
              <li>Edit Profile</li>
              <li>Settings</li>
              <Link to='/login'><li>Logout</li></Link> 
            </ul>
          </div>
        )}
      </div>

      <div className="container">
        <div className="sidebar">
          <ul>
          <Link to='/Dashboard'><li>Dashboard</li></Link>
            <Link to='/TeamManagement'><li>Team Management</li></Link> {/* Use Link for internal navigation */}
            <Link to='/EventManagement'><li>Event Management</li></Link>
            <li>Reports</li>
            <li>Announcements</li>
          </ul>
        </div>
        
        <div className="central-section">
          <div className="information-box">
            <h2>Latest Player Registrations</h2>
            {/* Display line graph */}
          </div>
          <div className="information-box">
            <h2>Admin Wise pie chart</h2>
            {/* Display pie chart */}
          </div>
          <div className="information-box">
            <h2>Time wise Users Installed App</h2>
            {/* Display bar graph */}
          </div>
          <div className="information-box">
            <h2>Users Per Country</h2>
            {/* Display pie chart and list of countries */}
          </div>
        </div>
        </div>
        </div>
        
    
  );
};

export default Dashboard;
