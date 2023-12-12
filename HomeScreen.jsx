import React from 'react';
import './HomeScreen.css'; // Ensure this CSS file is in the same directory

const HomeScreen = () => {
  const handleSOSClick = () => {
    alert('Emergency contacts have been notified!');
  };

  const handleHeartClick = () => {
    // Logic for heart icon button
  };

  const handleBellClick = () => {
    // Logic for bell icon button
  };

  return (
    <div id="homeScreen" className="screen">
      <header className="top-banner">
        <button onClick={handleHeartClick} className="icon-button heart"></button>
        <h1>lifelink.</h1>
        <button onClick={handleBellClick} className="icon-button bell"></button>
      </header>
      <main className="content">
        <img src="qr.png" alt="QR Code" className="qr-code" />
        <p className="scan-text">SCAN QR CODE TO NOTIFY EMERGENCY CONTACTS</p>
        <button onClick={handleSOSClick} className="btn-sos">SOS</button>
      </main>
      <footer className="footer-nav">
        {/* Footer buttons go here */}
      </footer>
    </div>
  );
};

export default HomeScreen;
