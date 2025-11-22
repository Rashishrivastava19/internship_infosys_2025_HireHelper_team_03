import React, { useState } from "react";

/**
 * Props:
 *  - task: { id, title, ownerName, location, time }  // whatever fields you already have
 */
const RequestHelpButton = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(
    "Hi! I’d love to help with this task. Please let me know if my schedule works for you."
  );

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSend = async () => {
    // For now: just simulate sending (frontend milestone)
    alert(
      `Sending request for task "${task.title}" with message:\n\n${message}`
    );

    // ------------------------------
    // 🔜 BACKEND TEAM WILL REPLACE THIS:
    // await fetch(`http://localhost:5000/api/tasks/${task.id}/requests`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     taskId: task.id,
    //     ownerId: task.ownerId,
    //     helperId: "CURRENT_USER_ID",
    //     message,
    //   }),
    // });
    // ------------------------------

    setIsOpen(false);
  };

  return (
    <>
      {/* Button you place on each task card */}
      <button className="request-help-btn" onClick={handleOpen}>
        Request to Help
      </button>

      {/* Simple inline modal */}
      {isOpen && (
        <div className="request-modal-backdrop">
          <div className="request-modal">
            <h3>Request to help with: {task.title}</h3>
            {task.ownerName && (
              <p style={{ marginBottom: "6px" }}>
                Task owner: <strong>{task.ownerName}</strong>
              </p>
            )}

            <label className="request-modal-label">
              Your message to the task owner:
            </label>
            <textarea
              className="request-modal-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />

            <div className="request-modal-actions">
              <button className="cancel-btn" onClick={handleClose}>
                Cancel
              </button>
              <button className="send-btn" onClick={handleSend}>
                Send Request
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestHelpButton;
