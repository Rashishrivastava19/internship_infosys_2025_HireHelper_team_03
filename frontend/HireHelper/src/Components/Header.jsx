import React, { useState } from 'react';
import { MdNotifications } from 'react-icons/md';

const Header = ({ onLogout, showWelcome, currentView }) => {
  // Map appState → page title
  const getTitleFromView = (view) => {
    switch (view) {
      case 'dashboard':
        return 'Dashboard';
      case 'mytasks':
        return 'My Tasks';
      case 'requests':
        return 'Requests';
      case 'myrequests':
        return 'My Requests';
      case 'addtask':
        return 'Add Task';
      case 'settings':
        return 'Settings';
      case 'help':
        return 'Help & Support';
      default:
        return '';
    }
  };

  const pageTitle = getTitleFromView(currentView);

  // 🔔 dummy notifications + dropdown state
  const [notifications] = useState([
    {
      id: 1,
      message: 'Sarah Johnson requested to help with Computer Setup Help.',
      isRead: false,
    },
    {
      id: 2,
      message: 'Emily Chen requested to help with Computer Setup Help.',
      isRead: false,
    },
  ]);

  const [showDropdown, setShowDropdown] = useState(false);
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  return (
    <div
      className="header-meta"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      {/* LEFT: title + optional welcome */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {pageTitle && (
          <h2 style={{ margin: 0, fontWeight: 600, fontSize: 30 }}>
            {pageTitle}
          </h2>
        )}

        {showWelcome && (
          <span style={{ fontSize: '18px' }}>Welcome back, John!</span>
        )}
      </div>

      {/* RIGHT: search + bell + logout */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input
          type="text"
          placeholder="Search tasks..."
          className="search-bar"
        />

        {/* Notification icon + badge + dropdown */}
        <div style={{ position: 'relative' }}>
          <div
            className="notification-icon-container"
            onClick={toggleDropdown}
            style={{ position: 'relative', cursor: 'pointer' }}
          >
            <MdNotifications
              className="notification-icon"
              style={{ fontSize: '1.5em', color: '#333' }}
            />

            {unreadCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: -4,
                  right: -6,
                  backgroundColor: '#ef4444',
                  color: '#fff',
                  borderRadius: '999px',
                  fontSize: '11px',
                  padding: '2px 6px',
                  fontWeight: 600,
                }}
              >
                {unreadCount}
              </span>
            )}
          </div>

          {showDropdown && (
            <div
              style={{
                position: 'absolute',
                top: '120%',
                right: 0,
                backgroundColor: '#fff',
                boxShadow: '0 10px 20px rgba(15,23,42,0.15)',
                borderRadius: '10px',
                padding: '10px 12px',
                width: '280px',
                zIndex: 50,
              }}
            >
              <h4
                style={{
                  margin: '0 0 6px 0',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                Notifications
              </h4>
              {notifications.length === 0 ? (
                <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>
                  No new notifications.
                </p>
              ) : (
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '13px',
                  }}
                >
                  {notifications.map((n) => (
                    <li
                      key={n.id}
                      style={{
                        padding: '6px 0',
                        borderBottom: '1px solid #f3f4f6',
                      }}
                    >
                      {n.message}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        <button onClick={onLogout} className="logout-button">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
