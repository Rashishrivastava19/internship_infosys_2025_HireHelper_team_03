import React from 'react';


const TaskDetailModal = ({ task, onClose }) => {
if (!task) return null;
return (
<div className="modal-overlay">
<div className="modal-content">
<button className="close-button" onClick={onClose}>X</button>
<h3>{task.title}</h3>
<p>{task.details}</p>
</div>
</div>
);
};


export { TaskDetailModal };




