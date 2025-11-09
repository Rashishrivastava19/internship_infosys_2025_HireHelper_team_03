import React, { useState } from 'react';
import { MdMail } from 'react-icons/md';


const OtpVerificationPage = ({ onVerificationSuccess, onBackToLogin }) => {
const [otp, setOtp] = useState(['', '', '', '', '', '']);


const handleChange = (index, value) => {
if (/^[0-9]?$/.test(value)) {
const newOtp = [...otp];
newOtp[index] = value;
setOtp(newOtp);
if (value !== '' && index < 5) {
const next = document.getElementById(`otp-input-${index + 1}`);
if (next) next.focus();
}
}
};


const handleKeyDown = (e, index) => {
if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
const prev = document.getElementById(`otp-input-${index - 1}`);
if (prev) prev.focus();
}
};


const handleVerify = () => {
const enteredOtp = otp.join('');
if (enteredOtp.length === 6) onVerificationSuccess();
else alert('Please enter all 6 digits of the OTP.');
};


return (
<div className="otp-container">
<div className="otp-card">
<MdMail className="otp-icon" />
<h2>Check your email</h2>
<p>We've sent a 6-digit verification code to <span className="highlight-email">hiso@id</span></p>


<div className="otp-input-group">
{otp.map((digit, index) => (
<input key={index} id={`otp-input-${index}`} type="text" maxLength="1" value={digit} onChange={(e) => handleChange(index, e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} className="otp-input" />
))}
</div>


<button className="verify-button" onClick={handleVerify}>Verify Email</button>
<button className="back-to-login" onClick={onBackToLogin}>Back to login</button>
</div>
</div>
);
};


export default OtpVerificationPage;