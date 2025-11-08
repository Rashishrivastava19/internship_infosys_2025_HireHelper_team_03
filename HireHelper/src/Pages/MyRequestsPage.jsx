import React from 'react';
import { MdNotificationsNone } from "react-icons/md";

const myRequestsData = [
  {
    id: 1,
    taskTitle: "Help Moving Furniture",
    category: "moving",
    status: "Pending",
    taskOwner: "Sarah Johnson",
    message:
      "I’d be happy to help with your move! I have experience with heavy lifting and can bring some moving equipment. Available Saturday afternoon as requested.",
    time: "Sent Jul 4, 10:00 AM",
    location: "Downtown Seattle, WA",
    image: "/public/moving.jpg", // 👈 Make sure this exists in /public/images/
  },
];

const MyRequestsPage = () => (
  <div className="page-container my-requests-page">
    {/* ---- Header ---- */}
    <div className="page-header">
      <div className="header-left">
        <h2>My Requests</h2>
        <p>Track the help requests you've sent</p>
      </div>

      <div className="header-right">
        <input
          type="text"
          placeholder="Search tasks..."
          className="search-bar"
        />
        <MdNotificationsNone className="notification-icon" />
      </div>
    </div>

    {/* ---- Requests List ---- */}
    <div className="my-requests-list">
      {myRequestsData.map((request) => (
        <div key={request.id} className="my-request-card">
          <div className="my-request-header">
            <div className="profile-initials">SJ</div>
            <div className="request-header-info">
              <h4>
                {request.taskTitle}{" "}
                <span className="category-tag">{request.category}</span>
                <span className={`status-tag ${request.status.toLowerCase()}`}>
                  {request.status}
                </span>
              </h4>
              <p className="task-owner">Task owner: {request.taskOwner}</p>
            </div>
          </div>

          <div className="my-request-body">
            <p className="message-label">Your message:</p>
            <div className="message-box">{request.message}</div>
          </div>

          <div className="request-footer">
            <p className="meta-info">
              📅 {request.time} <span className="dot">•</span> 📍 {request.location}
            </p>
          </div>

          {/* 👇 Image placed below footer, aligned left */}
          {request.image && (
            <div className="request-image-container">
              <img
                src={request.image}
                alt={request.taskTitle}
                className="request-image"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default MyRequestsPage;
