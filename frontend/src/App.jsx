import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import Admin from './components/Admin';
import MyBookings from './components/MyBookings';

function App() {
  // Global States for User Session and Application Routing
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('home'); // Options: 'home', 'register', 'admin', 'bookings'
  const [userDetails, setUserDetails] = useState(null);

  // Global Logout Handler Matrix
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserDetails(null);
    setActiveTab('home'); // Redirect back to homepage automaticallycd
    alert("Logged out successfully! See you again.");
  };

  // Inline CSS for App Shell Container to prevent overlapping issues
  const appShellStyle = {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  };

  return (
    <div style={appShellStyle}>
      {/* 1. Global Navigation Bar */}
      <Navbar 
        isLoggedIn={isLoggedIn} 
        handleLogout={handleLogout} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* 2. Dynamic Conditional Rendering Engine for Tabs */}
      {activeTab === 'home' && (
        <LandingPage 
          setActiveTab={setActiveTab} 
          isLoggedIn={isLoggedIn} 
        />
      )}

      {activeTab === 'register' && (
        <Register 
          setIsLoggedIn={setIsLoggedIn} 
          setUserDetails={setUserDetails} 
          setActiveTab={setActiveTab} 
        />
      )}

      {activeTab === 'bookings' && (
        <MyBookings 
          userDetails={userDetails} 
        />
      )}

      {activeTab === 'admin' && (
        <Admin />
      )}
    </div>
  );
}

export default App;