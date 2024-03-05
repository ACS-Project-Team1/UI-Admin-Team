// import React from 'react';
// // import PlayerManagement from './PlayerManagement';
// // import EventManagement from './EventManagement';
// // import Reports from './Reports';
// // import Announcements from './Announcements';
// // import './Dashboard.css'; // Assuming you have a CSS file for styling
// import '../styles/Dashboard.css';

// interface DashboardProps {
//     onDashboard: (username: string) => void;
// }

// const Dashboard: React.FC<DashboardProps> = ({ onDashboard }) => {
//   return (
//     <div className="dashboard">
//     <div className="user-box">
//       <img src="path-to-your-image" alt="User Image" className="user-img" />
//       <div className="user-info">
//         <p>username</p>
//       </div>
//     </div>

// export default UserBox;
//     <div className="container">
//       {/* creating a div tag for side bar */}
//       <div className='sidebar'> 
         
//       <ul>
//         <li><h2>Dashboard </h2>  </li>
//        <li><h2>Player Management </h2></li>
//        <li><h2>Event Management </h2></li>
//        <li><h2>Reports </h2>  </li>
//        <li><h2>Announcements </h2></li>
//       </ul>
//        </div>
//         </div> 

//       <div className="central-section">
//         {/* Key information boxes */}
//         <div className="key-information">
//           {/* Upcoming events */}
//           <div className="information-box">
//             <h2>Upcoming Events</h2>
//             {/* Display upcoming events */}
//           </div>
//           {/* Standings */}
//           <div className="information-box">
//             <h2>Standings</h2>
//             {/* Display standings with charts/graphs */}
//           </div>
//           {/* Announcements */}
//           <div className="information-box">
//             <h2>Announcements</h2>
//             {/* Display announcements */}
//           </div>
//         </div>
//       </div>
      
//     </div>

//   );
// };

// export default Dashboard;


// Dashboard.tsx
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
        <img src="path-to-your-image" alt="User Image" className="user-img" />
        <div className="user-info">
          <p>Username</p>
        </div>
        {/* Profile dropdown menu */}
        {showDropdown && (
          <div className="dropdown-menu">
            <ul>
              <li>Edit Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        )}
      </div>

      <div className="container">
        <div className="sidebar">
          <ul>
            <li>Dashboard</li>
            <Link to='/PlayerManagement'><li>Player Management</li></Link> {/* Use Link for internal navigation */}
            <Link to='/EventManagement'><li>Event Management</li></Link>
            <li>Reports</li>
            <li>Announcements</li>
          </ul>
        </div>
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
  );
};

export default Dashboard;

