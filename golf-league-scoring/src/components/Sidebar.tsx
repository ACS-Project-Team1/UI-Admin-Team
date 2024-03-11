import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <Link to='/Dashboard'><li>Dashboard</li></Link>
        <Link to='/TeamManagement'><li>Team Management</li></Link>
        <Link to='/EventManagement'><li>Event Management</li></Link>
        <li>Reports</li>
        <li>Announcements</li>
      </ul>
    </div>
  );
};

export default Sidebar;
