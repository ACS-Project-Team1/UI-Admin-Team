// Header.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="header">
      <div className="user-box" onClick={toggleDropdown}>
        <img src="https://www.golfleaguetracker.com/glthome/images/golf-league-tracker-rectangle-color-2013.png" alt="User Image" className="user-img" />
        <div className="user-info">
          <p>Username</p>
        </div>
        {/* Profile dropdown menu */}
        {showDropdown && (
          <div className="dropdown-menu">
            <ul>
              <li><Link to='/edit-profile'>Edit Profile</Link></li>
              <li><Link to='/settings'>Settings</Link></li>
              <li><Link to='/login'><li>Logout</li></Link> </li> {/* Use Link for internal navigation */}
            </ul>
          </div>
        )}
      </div>
      {/* Other header elements can be added here */}
    </div>
  );
};

export default Header;

