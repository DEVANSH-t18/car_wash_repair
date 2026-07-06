import React from 'react';

const Navbar = ({ isLoggedIn, handleLogout, activeTab, setActiveTab }) => {
  const scrollToSection = (id) => {
    setActiveTab('home');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Inline Styles
  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 50px',
    boxSizing: 'border-box',
    fontFamily: '"Segoe UI", Roboto, sans-serif'
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    fontSize: '24px',
    fontWeight: '800',
    color: '#1a73e8',
    letterSpacing: '-0.5px'
  };

  const linkGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '30px'
  };

  const btnLinkStyle = {
    background: 'none',
    border: 'none',
    color: '#4a5568',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'color 0.2s',
  };

  const adminBtnStyle = {
    ...btnLinkStyle,
    color: '#e53e3e',
    backgroundColor: '#fff5f5',
    padding: '6px 12px',
    borderRadius: '6px',
  };

  const primaryBtnStyle = {
    backgroundColor: '#111827',
    color: '#ffffff',
    border: 'none',
    padding: '10px 22px',
    borderRadius: '10px',
    fontWeight: '700',
    fontSize: '14px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'all 0.2s'
  };

  const logoutBtnStyle = {
    ...primaryBtnStyle,
    backgroundColor: '#e53e3e',
    boxShadow: '0 4px 12px rgba(229,62,62,0.2)'
  };

  return (
    <nav style={navStyle}>
      {/* Left side Logo */}
      <div style={logoStyle} onClick={() => scrollToSection('home')}>
        <span>🚗</span>
        <span>AutoCare</span>
      </div>

      {/* Right side Links */}
      <div style={linkGroupStyle}>
        <button style={btnLinkStyle} onClick={() => scrollToSection('home')}>Home</button>
        <button style={btnLinkStyle} onClick={() => scrollToSection('about')}>About Us</button>
        <button style={btnLinkStyle} onClick={() => scrollToSection('services')}>Our Services</button>
        
        <button style={adminBtnStyle} onClick={() => setActiveTab('admin')}>AA</button>
        
        {isLoggedIn && (
          <button style={{...btnLinkStyle, color: '#38a169'}} onClick={() => setActiveTab('bookings')}>Booking Section</button>
        )}

        {isLoggedIn ? (
          <button style={logoutBtnStyle} onClick={handleLogout}>Logout</button>
        ) : (
          <button style={primaryBtnStyle} onClick={() => setActiveTab('register')}>Register</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;