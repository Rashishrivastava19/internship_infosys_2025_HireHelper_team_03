import React, { useState } from "react";
import { MdNotificationsNone } from "react-icons/md";

const initialRequests = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 4.8,
    reviews: 18,
    details:
      "Hi! I’d love to help with your computer setup. I have 5+ years of IT experience and can handle networking, software installation, and troubleshooting. Available tomorrow afternoon as requested.",
    requestingFor: "Computer Setup Help",
    time: "Jul 4, 4:00 PM",
    location: "Within 5 miles",
  },
  {
    id: 2,
    name: "Emily Chen",
    rating: 5,
    reviews: 41,
    details: "I'm a software engineer and can assist with your setup.",
    requestingFor: "Computer Setup Help",
    time: "Jul 4, 2:00 PM",
    location: "Within 5 miles",
  },
];

const RequestsPage = ({ onNavigate }) => {
  const [requests, setRequests] = useState(initialRequests);

  // ---- Accept Request ----
  const handleAccept = (id) => {
    console.log(`Accepted request with id: ${id}`);
    // ✅ Navigate to My Requests page instead of My Tasks
    if (onNavigate) onNavigate("myrequests");
  };

  // ---- Decline Request ----
  const handleDecline = (id) => {
    console.log(`Declined request with id: ${id}`);
    // Remove from local list (no backend)
    setRequests((prev) => prev.filter((req) => req.id !== id));
  };

  return (
    <div className="page-container requests-page">
      {/* ---- Page Header ---- */}
      <div className="page-header">
        <div className="header-left">
          <h1>Requests</h1>
          <p>People who want to help with your tasks</p>
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

      {/* ---- Request Cards ---- */}
      <div className="incoming-requests-section">
        {requests.length === 0 ? (
          <p style={{ color: "#666", marginTop: "20px" }}>
            No incoming requests right now.
          </p>
        ) : (
          requests.map((request) => (
            <div key={request.id} className="request-card">
              <h3>
                {request.name} — ⭐ {request.rating} ({request.reviews} reviews)
              </h3>
              <p>{request.details}</p>
              <p>
                <strong>Requesting for:</strong> {request.requestingFor}
              </p>
              <p>
                📅 {request.time} • 📍 {request.location}
              </p>

              <div className="request-actions">
                <button
                  className="accept-btn"
                  onClick={() => handleAccept(request.id)}
                >
                  Accept
                </button>
                <button
                  className="decline-btn"
                  onClick={() => handleDecline(request.id)}
                >
                  Decline
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RequestsPage;



