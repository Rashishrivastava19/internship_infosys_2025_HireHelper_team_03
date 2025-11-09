import React, { useState } from 'react';
import { MdPeople } from 'react-icons/md';


const myTasksData = [
    { id: 101, title: 'Website Design Assistance', status: 'Active', posted: '2 days ago', price: '$150', description: 'Need help with responsive design implementation', applicants: '5 people interested', isPosted: true },
    { id: 102, title: 'Grocery Shopping Help', status: 'In Progress', posted: '5 days ago', price: '$30', description: 'Weekly grocery shopping and delivery', helper: 'John D.', isPosted: true },
    { id: 103, title: 'Website Design Assistance', status: 'Active', posted: '2 days ago', price: '$150', description: 'Need help with responsive design implementation', applicants: '5 people interested', isPosted: true },
    { id: 104, title: 'Grocery Shopping Help', status: 'In Progress', posted: '5 days ago', price: '$30', description: 'Weekly grocery shopping and delivery', helper: 'John D.', isPosted: true },
    { id: 105, title: 'Move Furniture', status: 'Completed', posted: '1 week ago', price: '$80', description: 'Moved all furniture to new apartment', helper: 'Mike R.', isPosted: false },
];


const MyTaskItem = ({ task }) => (
<div className="my-task-item">
<div className="task-header-meta"><h3 className="task-title-main">{task.title}</h3><div className="task-price-status"><span className={`task-status ${task.status.toLowerCase().replace(' ', '-')}`}>{task.status.toUpperCase()}</span><p className="price-tag">{task.price}</p></div></div>
<p className="task-posted">Posted {task.posted}</p>
<p className="task-details-short">{task.description}</p>
<div className="task-bottom-row">
{task.isPosted ? (task.applicants ? (<><p className="interested-count"><MdPeople /> {task.applicants}</p><button className="view-applicants-button">View Applicants</button></>) : (<p className="assigned-helper">Helper: {task.helper}</p>)) : (<><p className="assigned-helper">Helper: {task.helper || 'N/A'}</p>{task.status === 'In Progress' && <button className="mark-complete-button">Mark Complete</button>}</>)}
</div>
</div>
);


const MyTasksPage = () => {
const [activeTab, setActiveTab] = useState('posted');
const filteredTasks = myTasksData.filter(task => activeTab === 'posted' ? task.isPosted : !task.isPosted);


return (
<div className="my-tasks-container">
<div className="my-tasks-header"><h2>My Tasks</h2><p>Manage your posted tasks and helping requests</p></div>


<div className="my-tasks-tabs"><button className={activeTab === 'posted' ? 'active' : ''} onClick={() => setActiveTab('posted')}>Tasks I Posted</button><button className={activeTab === 'helping' ? 'active' : ''} onClick={() => setActiveTab('helping')}>Tasks I'm Helping</button></div>


<div className="task-list">{filteredTasks.length > 0 ? filteredTasks.map(task => <MyTaskItem key={task.id} task={task} />) : <p className="no-tasks">No tasks found in this category.</p>}</div>
</div>
);
};

export default MyTasksPage;