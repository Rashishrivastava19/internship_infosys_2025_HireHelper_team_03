import React, { useState } from 'react';
import './App.css'; 
// Import Icons from react-icons/md (Material Design Icons)
import { MdWork, MdPeople, MdSecurity, MdAccessTime, MdAccountCircle } from 'react-icons/md';

/**
 * Component for the Feature Cards on the Left Panel
 */
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card">
    <Icon className="icon" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);




// ... (All imports and FeatureCard component remain the same above this)

/**
 * Component for the Login Form
 */
const LoginForm = () => {
  // State to manage which tab is active: 'signin' or 'signup'
  const [activeTab, setActiveTab] = useState('signin');

  // Function to render the correct form fields based on the active tab
  const renderFormFields = () => {
    // Sign Up needs Full Name and Confirm Password fields
    if (activeTab === 'signup') {
      return (
        <>
          <div className="form-group">
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              required
            />
          </div>
        </>
      );
    } 
    
    // Sign In only needs Email and Password
    return (
      <>
        <div className="form-group">
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            required
          />
        </div>
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${activeTab === 'signin' ? 'Sign In' : 'Sign Up'} clicked! (Data capture would happen here!)`);
  };

  return (
    <div className="login-form-container">
      {/* Auth Tabs (Remains the same) */}
      <div className="auth-tabs">
        <button
          className={activeTab === 'signin' ? 'active' : ''}
          onClick={() => setActiveTab('signin')}
        >
          Sign In
        </button>
        <button
          className={activeTab === 'signup' ? 'active' : ''}
          onClick={() => setActiveTab('signup')}
        >
          Sign Up
        </button>
      </div>

      {/* Form Header (Updates dynamically) */}
      <div className="form-header">
        <h2>{activeTab === 'signin' ? 'Welcome back' : 'Create an Account'}</h2>
        <p>{activeTab === 'signin' ? 'Enter your credentials to continue' : 'Get started with HireHelper'}</p>
      </div>

      {/* Actual Form */}
      <form onSubmit={handleSubmit}>
        
        {/* Render fields dynamically */}
        {renderFormFields()}

        {/* Options Bar (Only show 'Remember Me' on Sign In) */}
        {activeTab === 'signin' && (
            <div className="options-bar">
                <div className="remember-me">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                </div>
                <a href="/forgot-password">
                    Forgot password?
                </a>
            </div>
        )}

        {/* Submit Button (Changes text dynamically) */}
        <button type="submit" className="submit-btn">
          {activeTab === 'signin' ? 'Sign In' : 'Create Account'}
        </button>
      </form>
    </div>
  );
};

// ... (The rest of App component remains the same below this)

/**
 * Main Application Component
 */
const App = () => {
  return (
    <div className="app-container">
      {/* Left Panel - Dark Theme */}
      <div className="left-panel">
        <div>
          {/* Logo and Slogan */}
          <div className="logo-section">
            <MdAccountCircle style={{ fontSize: '2.5em', marginBottom: '10px', color:'white', background:'#333333',padding:'10px',borderRadius:'8px',border:'1px solid #555555' }} />
            <h1>HireHelper</h1>
            <p>Find Jobs. Hire Help. Get Things Done.</p>
          </div>

          {/* Intro/Marketing Text */}
          <div className="intro-text">
            <p>
              One platform for work and assistance.
              <br />
              Whether you're seeking employment, need help with tasks, or looking to hire talent—we've got you covered.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="feature-grid">
            <FeatureCard
              icon={MdWork}
              title="Find Jobs"
              description="Browse full-time and freelance opportunities"
            />
            <FeatureCard
              icon={MdPeople}
              title="Hire Talent"
              description="Post tasks and connect with skilled workers"
            />
            <FeatureCard
              icon={MdSecurity}
              title="Secure Platform"
              description="Verified profiles with ratings and reviews"
            />
            <FeatureCard
              icon={MdAccessTime}
              title="Quick Matches"
              description="Find help or work within minutes"
            />
          </div>
        </div>
        {/*<----deleted----> footer */}
        {/* Footer Info */}
         
        
      </div> 

      {/* Right Panel - Login/Signup Form */}
      <div className="right-panel">
        <LoginForm />
      </div>
    </div>
  );
};

export default App;