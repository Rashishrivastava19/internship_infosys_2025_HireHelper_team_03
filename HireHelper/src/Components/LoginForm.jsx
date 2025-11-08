import React, { useState } from 'react';


const LoginForm = ({ activeTab, setActiveTab, onAuthenticationComplete }) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const handleSubmit = (e) => {
e.preventDefault();
onAuthenticationComplete();
};


const handleForgotPasswordClick = (e) => {
e.preventDefault();
onAuthenticationComplete();
};


return (
<div className="login-form-container">
<div className="tabs">
<button className={activeTab === 'signin' ? 'active' : ''} onClick={() => setActiveTab('signin')}>Sign In</button>
<button className={activeTab === 'signup' ? 'active' : ''} onClick={() => setActiveTab('signup')}>Sign Up</button>
</div>


<h2 className="welcome-text">{activeTab === 'signin' ? 'Welcome back' : 'Create an Account'}</h2>
<p className="sub-text">{activeTab === 'signin' ? 'Enter your credentials to continue' : 'Get started with HireHelper'}</p>


<form onSubmit={handleSubmit} className="form-content">
{activeTab === 'signup' && (
<div className="input-group">
<input type="text" id="name" placeholder="Full Name" required />
</div>
)}


<div className="input-group">
<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
</div>


<div className="input-group">
<input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
</div>


{activeTab === 'signup' && (
<div className="input-group">
<input type="password" id="confirm-password" placeholder="Confirm Password" required />
</div>
)}


{activeTab === 'signin' && (
<div className="meta-links">
<label className="remember-me"><input type="checkbox" /> Remember me</label>
<a href="#" className="forgot-password" onClick={handleForgotPasswordClick}>Forgot password?</a>
</div>
)}


<button type="submit" className="login-button">{activeTab === 'signin' ? 'Sign In' : 'Create Account'}</button>
</form>
</div>
);
};


export default LoginForm;