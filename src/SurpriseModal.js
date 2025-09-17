import React from "react";
import "./SurpriseModal.css";

function SurpriseModal({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p className="modal-message">{message}</p>
        <button className="close-btn" onClick={onClose}>
          💖 Close
        </button>
      </div>
    </div>
  );
}

export default SurpriseModal;
