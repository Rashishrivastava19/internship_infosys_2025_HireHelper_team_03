import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import { MdList, MdHistory, MdDashboard as MdDash, MdPeople } from 'react-icons/md';


const DashboardContent = ({ onLogout, onNavigate, appState }) => {
const [selectedTask, setSelectedTask] = useState(null);


const taskSummary = [
{ label: 'Active Tasks', count: 12, trend: '+3 this week', icon: MdList, color: '#FFD700' },
{ label: 'Completed', count: 48, trend: '+8 this month', icon: MdHistory, color: '#32CD32' },
{ label: 'Total Tasks', count: 67, trend: 'All time', icon: MdDash, color: '#4682B4' },
{ label: 'Helpers Hired', count: 24, trend: '+5 this month', icon: MdPeople, color: '#FF6347' },
];


const recentTasks = [
{ id: 1, title: 'Help moving furniture', status: 'In Progress', details: 'Need assistance moving furniture to a new apartment on 3rd floor...', location: 'Downtown, NYC', time: '5 - 2 hours ago', assigned: 'Alex Johnson', price: '$80' },
{ id: 2, title: 'Garden cleaning', status: 'Open', details: 'Help clean and organize backyard garden...', location: 'Brooklyn, NYC', time: '5 hours ago', assigned: null, price: '$50' },
{ id: 3, title: 'Grocery shopping', status: 'In Progress', details: 'Purchase groceries and deliver to home...', location: 'The Bronx, NYC', time: '8 hours ago', assigned: 'Jane Smith', price: '$40' },
];


return (
<>
<div className="main-content">
<header className="dashboard-header">
<h1>Dashboard</h1>
<Header onLogout={onLogout} showWelcome={true} />
</header>


<section className="task-summary-grid">
{taskSummary.map((item, index) => (
<div key={index} className="task-card">
<item.icon className="summary-icon" style={{ color: item.color }} />
<p className="task-count">{item.count}</p>
<p className="task-label">{item.label}</p>
<p className="task-trend">{item.trend}</p>
</div>
))}
</section>


<section className="content-rows">
<div className="recent-tasks-section">
<h2>Recent Tasks</h2>
{recentTasks.map((task) => (
<div key={task.id} className="task-item" onClick={() => setSelectedTask(task)}>
<div className="task-header"><h3>{task.title}</h3><span className={`task-status ${task.status.toLowerCase().replace(' ', '-')}`}>{task.status}</span></div>
<p className="task-details">{task.details}</p>
<div className="task-meta"><p className="location">{task.location}</p><p className="time">{task.price} - {task.time}</p></div>
{task.assigned && <p className="assigned-to">Assigned to: <strong>{task.assigned}</strong></p>}
</div>
))}
</div>


<div className="quick-actions-section">
<h2>Quick Actions</h2>
<button className="action-button primary-action" onClick={() => onNavigate('addtask')}>+ Post New Task</button>
<button className="action-button">Browse Tasks</button>
<button className="action-button">Messages</button>
<button className="action-button">Notifications</button>
</div>
</section>
</div>
</>
);
};


const Dashboard = ({ onLogout, onNavigate, appState, overrideMain }) => {
return (
<div className="dashboard-layout">
<Sidebar currentView={appState} onNavigate={onNavigate} />
{overrideMain ? overrideMain() : <DashboardContent onLogout={onLogout} onNavigate={onNavigate} appState={appState} />}
</div>
);
};


export default Dashboard;