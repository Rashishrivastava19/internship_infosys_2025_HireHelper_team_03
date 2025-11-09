import React, { useState } from 'react';

const AddTaskPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    budget: '',
    location: '',
    duration: '',
    deadline: '',
    experienceLevel: 50,
    skills: [],
    isUrgent: false
  });

  const [currentSkill, setCurrentSkill] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [formCompletion, setFormCompletion] = useState(0);

  const categories = [
    'Web Development',
    'Mobile Development',
    'Design',
    'Writing',
    'Marketing',
    'Data Entry',
    'Virtual Assistant',
    'Other'
  ];

  const durations = [
    'Less than 1 week',
    '1-2 weeks',
    '2-4 weeks',
    '1-3 months',
    'More than 3 months'
  ];

  const calculateCompletion = (data) => {
    const fields = ['title', 'description', 'category', 'budget', 'deadline'];
    const filled = fields.filter(field => data[field]?.toString().trim() !== '').length;
    return Math.round((filled / fields.length) * 100);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    setFormCompletion(calculateCompletion(updatedData));
  };

  const handleSliderChange = (e) => {
    const updatedData = { ...formData, experienceLevel: parseInt(e.target.value) };
    setFormData(updatedData);
  };

  const handleToggle = () => {
    setFormData({ ...formData, isUrgent: !formData.isUrgent });
  };

  const addSkill = () => {
    if (currentSkill.trim() && !formData.skills.includes(currentSkill.trim())) {
      setFormData({ ...formData, skills: [...formData.skills, currentSkill.trim()] });
      setCurrentSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => {
      const isValid = ['image/png', 'image/jpeg', 'application/pdf'].includes(file.type);
      const isUnder10MB = file.size <= 10 * 1024 * 1024;
      return isValid && isUnder10MB;
    });
    setAttachments([...attachments, ...validFiles]);
  };

  const removeAttachment = (index) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  const handleClear = () => {
    setFormData({
      title: '',
      description: '',
      category: '',
      budget: '',
      location: '',
      duration: '',
      deadline: '',
      experienceLevel: 50,
      skills: [],
      isUrgent: false
    });
    setAttachments([]);
    setFormCompletion(0);
  };

  const handleSubmit = () => {
    if (formCompletion < 100) {
      alert('Please fill in all required fields');
      return;
    }
    console.log('Form submitted:', { ...formData, attachments });
    alert('Task posted successfully!');
  };

  return (
    <div className="add-task-container">
      <div className="add-task-content">
        {/* Header */}
        <div className="add-task-header">
          <h1 className="add-task-title">Post a New Task</h1>
          <p className="add-task-subtitle">Fill in the details to find the perfect helper</p>
        </div>

        {/* Completion Card at Top - Shows when progress > 0 */}
        {formCompletion > 0 && (
          <div className="completion-card completion-card-top">
            <div className="completion-header">
              <span className="completion-label">Form Completion</span>
              <span className="completion-percent">{formCompletion}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${formCompletion}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Main Form Card */}
        <div className="form-card">
          {/* Task Details Section */}
          <div className="form-section">
            <h2 className="section-title">Task Details</h2>
            <p className="section-subtitle">Provide clear information to attract the right helpers</p>

            {/* Task Title */}
            <div className="form-group">
              <label className="form-label">
                Task Title <span className="required">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Help with Website Development"
                className="form-input"
                maxLength={100}
              />
              <span className="char-count">{formData.title.length}/100 characters</span>
            </div>

            {/* Description */}
            <div className="form-group">
              <label className="form-label">
                Description <span className="required">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Provide detailed information about what you need help with..."
                className="form-textarea"
                maxLength={2000}
                rows={6}
              />
              <span className="char-count">{formData.description.length}/2000 characters</span>
            </div>

            {/* Category and Budget Row */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  Category <span className="required">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Select a category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Budget <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  placeholder="e.g., $50 or $25/hour"
                  className="form-input"
                />
              </div>
            </div>
          </div>

          <div className="divider"></div>

          {/* Additional Details Section */}
          <div className="form-section">
            {/* Location */}
            <div className="form-group">
              <label className="form-label">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g., Downtown, Remote, or specific address"
                className="form-input"
              />
            </div>

            {/* Duration and Deadline Row */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Estimated Duration</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Select duration</option>
                  {durations.map(dur => (
                    <option key={dur} value={dur}>{dur}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Deadline <span className="required">*</span>
                </label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            {/* Experience Level Slider */}
            <div className="form-group">
              <label className="form-label">Required Experience Level</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.experienceLevel}
                  onChange={handleSliderChange}
                  className="experience-slider"
                />
                <div className="slider-labels">
                  <span className="slider-label">Beginner</span>
                  <span className="slider-value">{formData.experienceLevel}%</span>
                  <span className="slider-label">Expert</span>
                </div>
              </div>
            </div>

            {/* Skills/Tags */}
            <div className="form-group">
              <label className="form-label">Skills/Tags</label>
              <div className="skills-input-container">
                <input
                  type="text"
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                  placeholder="e.g., React, Node.js, UI/UX"
                  className="skill-input"
                />
                <button onClick={addSkill} className="add-skill-btn">
                  <span className="plus-icon">+</span> Add
                </button>
              </div>
              {formData.skills.length > 0 && (
                <div className="skills-container">
                  {formData.skills.map((skill, index) => (
                    <div key={index} className="skill-tag">
                      {skill}
                      <button onClick={() => removeSkill(skill)} className="remove-skill-btn">
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Attachments */}
            <div className="form-group">
              <label className="form-label">Attachments</label>
              <div className="upload-container">
                <input
                  type="file"
                  id="fileUpload"
                  onChange={handleFileUpload}
                  accept=".png,.jpg,.jpeg,.pdf"
                  multiple
                  className="file-input"
                />
                <label htmlFor="fileUpload" className="upload-area">
                  <svg className="upload-icon-svg" width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 13L12 16L15 13M12 16V8M20 16V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V16M16 8L12 4L8 8M12 4V12" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="upload-text">Click to upload or drag and drop</p>
                  <p className="upload-subtext">PNG, JPG, PDF up to 10MB</p>
                </label>
              </div>
              {attachments.length > 0 && (
                <div className="attachments-list">
                  {attachments.map((file, index) => (
                    <div key={index} className="attachment-item">
                      <span className="attachment-name">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'inline-block', marginRight: '0.5rem', verticalAlign: 'middle'}}>
                          <path d="M7 18H17V16H7V18ZM7 14H17V12H7V14ZM7 10H17V8H7V10ZM5 22C4.45 22 3.979 21.804 3.587 21.412C3.195 21.02 2.99934 20.5493 3 20V4C3 3.45 3.196 2.979 3.588 2.587C3.98 2.195 4.45067 1.99934 5 2H14L20 8V20C20 20.55 19.804 21.021 19.412 21.413C19.02 21.805 18.5493 22.0007 18 22H5ZM13 9H18.5L13 3.5V9Z" fill="#333"/>
                        </svg>
                        {file.name}
                      </span>
                      <button onClick={() => removeAttachment(index)} className="remove-attachment-btn">
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="divider"></div>

          {/* Urgent Section */}
          <div className="urgent-section">
            <div>
              <h3 className="urgent-title">Mark as Urgent</h3>
              <p className="urgent-subtitle">Urgent tasks get priority visibility and faster responses</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={formData.isUrgent}
                onChange={handleToggle}
                className="toggle-input"
              />
              <span className={`toggle-slider ${formData.isUrgent ? 'active' : ''}`}></span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="form-actions">
            <button onClick={handleClear} className="clear-btn">Clear</button>
            <button onClick={handleSubmit} className="submit-btn">Post Task</button>
          </div>
        </div>

        {/* Tips Card */}
        <div className="tips-card">
          <h3 className="tips-title">Tips for a successful task post</h3>
          <ul className="tips-list">
            <li className="tip-item">✓ Be specific about your requirements and expectations</li>
            <li className="tip-item">✓ Include a realistic budget to attract quality helpers</li>
            <li className="tip-item">✓ Add relevant tags to help the right people find your task</li>
            <li className="tip-item">✓ Upload any reference files or documents that might help</li>
            <li className="tip-item">✓ Set a clear deadline to manage expectations</li>
          </ul>
        </div>

        
      </div>
    </div>
  );
};

export default AddTaskPage;
