import React, { useState } from 'react';

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    username: 'rashi803819',
    email: 'rashi803819@gmail.com',
    fullName: 'rashi803819',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Experienced professional helper with expertise in tech, errands, and creative tasks.',
    emailNotifications: true,
    pushNotifications: true
  });

  const [displayData, setDisplayData] = useState({
    username: 'rashi803819',
    email: 'rashi803819@gmail.com'
  });

  const [isEditing, setIsEditing] = useState(false);

  const skills = ['Web Development', 'Graphic Design', 'Friends', 'Pet Care', 'Moving'];
  const stats = {
    completedTasks: 45,
    rating: 4.8,
    responseRate: 95
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEditToggle = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Update display data with form data
    setDisplayData({
      username: formData.fullName,
      email: formData.email
    });
    // Add save logic here
    console.log('Saved data:', formData);
    alert('Profile updated successfully!');
  };

  const handleDeactivate = (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to deactivate your account?')) {
      console.log('Account deactivated');
      alert('Account deactivated');
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      console.log('Account deleted');
      alert('Account deleted');
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Profile Settings</h1>
        <p className="settings-subtitle">Manage your account information and preferences</p>
      </div>

      {/* Profile Overview Section */}
      <div className="settings-section profile-overview">
        <div className="profile-header">
          <div className="profile-left">
            <div className="profile-avatar">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="profile-info">
              <h2>{displayData.username}</h2>
              <p className="profile-email">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                {displayData.email}
              </p>
              <div className="skills-tags">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <button 
            className="edit-profile-btn" 
            onClick={handleEditToggle}
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
              </svg>
            </div>
            <div className="stat-content">
              <p className="stat-label">Completed Tasks</p>
              <p className="stat-value">{stats.completedTasks}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            </div>
            <div className="stat-content">
              <p className="stat-label">Rating</p>
              <p className="stat-value">{stats.rating}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="stat-content">
              <p className="stat-label">Response Rate</p>
              <p className="stat-value">{stats.responseRate}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="settings-section">
        <div className="section-header">
          <h2>Personal Information</h2>
          <p className="section-subtitle">Update your personal details</p>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="form-group">
            <label>
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder="San Francisco, CA"
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            disabled={!isEditing}
            rows="4"
            placeholder="Experienced professional helper with expertise in tech, errands, and creative tasks."
          />
        </div>

        {isEditing && (
          <div className="form-actions">
            <button className="btn-secondary" onClick={handleEditToggle}>Cancel</button>
            <button className="btn-primary" onClick={handleSave}>Save Changes</button>
          </div>
        )}
      </div>

      {/* Notification Preferences Section */}
      <div className="settings-section">
        <div className="section-header">
          <h2>Notification Preferences</h2>
          <p className="section-subtitle">Manage how you receive notifications</p>
        </div>

        <div className="notification-options">
          <div className="notification-item">
            <div className="notification-info">
              <h3>Email Notifications</h3>
              <p>Receive task updates via email</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={formData.emailNotifications}
                onChange={handleInputChange}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="notification-item">
            <div className="notification-info">
              <h3>Push Notifications</h3>
              <p>Get real-time updates on your device</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                name="pushNotifications"
                checked={formData.pushNotifications}
                onChange={handleInputChange}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>

      {/* Danger Zone Section */}
      <div className="settings-section danger-zone">
        <div className="section-header">
          <h2>Danger Zone</h2>
          <p className="section-subtitle">Irreversible account actions</p>
        </div>

        <div className="danger-actions">
          <button className="btn-danger-outline" onClick={handleDeactivate}>
            Deactivate Account
          </button>
          <button className="btn-danger" onClick={handleDelete}>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
