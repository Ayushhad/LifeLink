import React, { useState } from 'react';
import './ConsentManagement.css'; // Make sure this CSS file is in the same directory

const ConsentManagement = () => {
  // Dummy state for toggle switches (replace with real state logic)
  const [consents, setConsents] = useState({
    '1': false,
    '2': false,
    // Add other IDs as necessary
  });

  // Function to handle toggle switch changes
  const handleToggle = (contactId) => {
    setConsents({
      ...consents,
      [contactId]: !consents[contactId],
    });
  };

  // Function to handle "Save Changes" button click
  const handleSaveChanges = () => {
    // Add logic to handle saving changes
    console.log('Consents saved:', consents);
  };

  // Function to handle "Back to Home" button click
  const handleBackToHome = () => {
    // Add logic to navigate back home
    console.log('Navigate back to home');
  };

  return (
    <div id="consentManagement" className="screen">
      <header className="top-banner">
        <h1>lifelink.</h1>
      </header>
      <main className="content">
        <h2>Consent Management</h2>
        <div className="contact-list">
          {/* This is static content, replace with dynamic content as necessary */}
          <div className="contact-item">
            <span className="contact-name">Brother : Daksh Aggarwal</span>
            <span className="contact-number">9008766521</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={consents['1']}
                onChange={() => handleToggle('1')}
              />
              <span className="slider round"></span>
            </label>
          </div>
          {/* Repeat for each contact */}
        </div>
        <button onClick={handleSaveChanges} className="btn-save">SAVE CHANGES</button>
        <button onClick={handleBackToHome} className="btn-back">BACK TO HOME</button>
      </main>
    </div>
  );
};

export default ConsentManagement;
