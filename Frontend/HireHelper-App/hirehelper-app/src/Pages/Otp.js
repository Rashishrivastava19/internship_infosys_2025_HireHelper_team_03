// src/Authentication.js
import React, { useState } from "react";
import "./Otp.css";

const OTPpage = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (e, index) => {
    if (isNaN(e.target.value)) return;
    let newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    // Auto focus next input
    if (e.target.value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <div className="otp-icon">📩</div>
        <h2>Check your email</h2>
        <p>We’ve sent a 6-digit verification code to your email.</p>

        <div className="otp-inputs">
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>

        <button className="verify-btn">Verify Email</button>
        <a href="#" className="back-link">← Back to login</a>
      </div>
    </div>
  );
};

export default OTPpage;
