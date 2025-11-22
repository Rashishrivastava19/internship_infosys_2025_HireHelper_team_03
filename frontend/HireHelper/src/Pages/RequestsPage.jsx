import React, { useState } from "react";
import { MdNotificationsNone } from "react-icons/md";

const API_BASE_URL = "http://localhost:5000/api"; // 👈 backend base URL

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
  const handleAccept = async (id) => {
    console.log(`Accepted request with id: ${id}`);

    const requestToAccept = requests.find((req) => req.id === id);

    try {
      // 👉 BACKEND TEAM:
      // Implement POST /api/task-requests/:id/accept
      // Body can contain helper / task info if needed.
      await fetch(`${API_BASE_URL}/task-requests/${id}/accept`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestToAccept),
      });

      // Remove from local list
      setRequests((prev) => prev.filter((req) => req.id !== id));

      // Navigate to My Requests page
      if (onNavigate) onNavigate("myrequests");
    } catch (error) {
      console.error("Error while accepting request:", error);
      alert("accepting this request.");
    }
  };

  // ---- Decline Request ----
  const handleDecline = async (id) => {
    console.log(`Declined request with id: ${id}`);

    const requestToDecline = requests.find((req) => req.id === id);

    try {
      // 👉 BACKEND TEAM:
      // Implement POST /api/task-requests/:id/decline
      await fetch(`${API_BASE_URL}/task-requests/${id}/decline`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestToDecline),
      });

      // Remove from local list
      setRequests((prev) => prev.filter((req) => req.id !== id));
    } catch (error) {
      console.error("Error while declining request:", error);
      alert("Something went wrong while declining this request.");
    }
  };

  return (
    <div className="page-container requests-page">
      {/* ---- Page Header ---- */}
      <div className="page-header">
        <div className="header-left">
          <h2> Incoming Requests</h2>
          <p>People who want to help with your tasks</p>
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



