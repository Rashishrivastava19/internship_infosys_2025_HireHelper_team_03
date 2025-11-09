import React, { useState } from 'react';
import { 
  MdLock, 
  MdEdit, 
  MdSupport, 
  MdStar,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp
} from 'react-icons/md';

const HelpSupport = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const faqs = [
    {
      id: 1,
      question: 'How can I reset my password?',
      answer: 'To reset your password, go to the login page and click on "Forgot Password". Enter your email address and you will receive a password reset link. Follow the instructions in the email to create a new password.',
      icon: MdLock
    },
    {
      id: 2,
      question: 'How do I edit my profile information?',
      answer: 'Navigate to the Settings page from the sidebar. Click on "Edit Profile" button to enable editing mode. Update your information and click "Save Changes" to apply the updates.',
      icon: MdEdit
    },
    {
      id: 3,
      question: 'How do I contact customer support?',
      answer: 'You can contact our customer support team by filling out the contact form below. Our team typically responds within 24-48 hours. For urgent matters, please include "URGENT" in your subject line.',
      icon: MdSupport
    },
    {
      id: 4,
      question: 'How is my rating calculated?',
      answer: 'Your rating is calculated based on the average of all ratings you receive from task requesters after completing tasks. Ratings are on a scale of 1-5 stars, and the displayed rating is the average of all your completed task ratings.',
      icon: MdStar
    }
  ];

  const handleFAQToggle = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success message
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Help & Support</h1>
        <p className="settings-subtitle">Find answers to common questions or get in touch with our support team.</p>
      </div>

      {/* FAQ Section */}
      <div className="settings-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p className="section-subtitle">Browse through common questions and answers</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => {
            const Icon = faq.icon;
            const isOpen = openFAQ === faq.id;
            return (
              <div key={faq.id} className="faq-item">
                <button
                  className={`faq-question ${isOpen ? 'open' : ''}`}
                  onClick={() => handleFAQToggle(faq.id)}
                >
                  <div className="faq-question-content">
                    <Icon className="faq-icon" />
                    <span>{faq.question}</span>
                  </div>
                  {isOpen ? (
                    <MdKeyboardArrowUp className="faq-arrow" />
                  ) : (
                    <MdKeyboardArrowDown className="faq-arrow" />
                  )}
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="settings-section">
        <div className="section-header">
          <h2>Contact Support</h2>
          <p className="section-subtitle">Didn't find what you're looking for? Reach out to us.</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-grid">
            <div className="form-group">
              <label>
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label>
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="What is this regarding?"
              required
            />
          </div>

          <div className="form-group full-width">
            <label>
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="6"
              placeholder="Please describe your issue or question in detail..."
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HelpSupport;

