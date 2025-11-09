import React from 'react';
import { MdAccountCircle, MdWork, MdPeople, MdLock, MdList } from 'react-icons/md';
import FeatureCard from './FeatureCard';


const WelcomePanel = () => (
<div className="left-panel">
<div className="logo-section">
<MdAccountCircle style={{ fontSize: '2.5em', color: 'white' }} />
<h1>HireHelper</h1>
<p className="tagline">Find Jobs. Hire Help. Get Things Done.</p>
</div>


<div className="intro-text">
<p>One platform for work and assistance. Whether you're seeking employment, need help with tasks, or looking to hire talent—we've got you covered.</p>
</div>


<div className="feature-grid">
<FeatureCard icon={<MdWork />} title="Find Jobs" description="Browse full-time and freelance opportunities" />
<FeatureCard icon={<MdPeople />} title="Hire Talent" description="Post tasks and connect with skilled workers." />
<FeatureCard icon={<MdLock />} title="Secure Platform" description="Verified profiles with ratings and reviews." />
<FeatureCard icon={<MdList />} title="Quick Matches" description="Find help or work within minutes." />
</div>
</div>
);
export default WelcomePanel;

