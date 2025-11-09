import React from 'react';
import { MdNotifications } from 'react-icons/md';

const Header = ({ onLogout, showWelcome }) => {
  return (
    <div className="header-meta" style={{ marginLeft: 'auto' }}>
      {showWelcome && <p>Welcome back, John!</p>}
      <input type="text" placeholder="Search tasks..." className="search-bar" />
      <div className="notification-icon-container">
        <MdNotifications className="notification-icon" style={{ fontSize: '1.5em', cursor: 'pointer', color: '#333' }} />
      </div>
      <button onClick={onLogout} className="logout-button">Log Out</button>
    </div>
  );
};

export default Header;
