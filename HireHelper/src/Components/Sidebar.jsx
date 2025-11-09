import React from 'react';
import { MdAccountCircle, MdDashboard, MdList, MdSettings, MdHelp, MdPeople, MdMail, MdAdd } from 'react-icons/md';


const Sidebar = ({ currentView, onNavigate }) => {
const navItems = [
{ icon: MdDashboard, label: 'Dashboard', state: 'dashboard' },
{ icon: MdList, label: 'My Tasks', state: 'mytasks' },
{ icon: MdPeople, label: 'Requests', state: 'requests' },
{ icon: MdMail, label: 'My Requests', state: 'myrequests' },
{ icon: MdAdd, label: 'Add Task', state: 'addtask' },
{ icon: MdSettings, label: 'Settings', state: 'settings' },
{ icon: MdHelp, label: 'Help & Support', state: 'help' },
];


return (
<div className="sidebar">
<div className="logo-section">
<h1>HireHelper</h1>
</div>


<nav className="nav-menu">
{navItems.map((item, index) => (
<a key={index} href="#" onClick={(e) => { e.preventDefault(); onNavigate(item.state); }} className={`nav-item ${item.state === currentView ? 'active' : ''}`}>
<item.icon className="nav-icon" />
<span>{item.label}</span>
</a>
))}
</nav>


<div className="sidebar-footer">
    <MdAccountCircle style={{ fontSize: '2em' }} />
    <p>John Doe</p>
    </div>
</div>
);
};


export default Sidebar;