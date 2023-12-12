import React from 'react';
import 'start1.css'; // Make sure to create a corresponding App.css file for styles

function WelcomeScreen() {
  return (
    <div className="welcome-screen">
      <header className="top-banner">
        <p>lifelink.</p>
      </header>
      <main className="content">
        <h1>Keep Safety at your Fingertips</h1>
        <div className="card">
          <img src="lifelinklogo.PNG" alt="LifeLink Logo" />
          <p>Saving seconds, Saving lives</p>
        </div>
        <h2>Let’s get started!</h2>
        <p>
          Experience peace of mind on your journeys with LifeLink, your trusted
          companion for safe traveling
        </p>
      </main>
      <footer className="footer-nav">
        <button className="skip-button">Skip</button>
        <div className="pagination-dots">
          {/* Render pagination dots here */}
        </div>
        <button className="next-button">Next</button>
      </footer>
    </div>
  );
}

export default WelcomeScreen;
