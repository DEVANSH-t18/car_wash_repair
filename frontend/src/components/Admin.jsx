import React, { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Admin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [isAdminAuth, setIsAdminAuth] = useState(false);
  const [bookingsList, setBookingsList] = useState([]);

  // Live Database Fetch Loop when Admin is Authenticated
  useEffect(() => {
    if (isAdminAuth) {
      fetch(`${API_URL}/api/admin/bookings`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) {
            setBookingsList(data);
          }
        })
        .catch(err => console.error("Error fetching data from backend:", err));
    }
  }, [isAdminAuth]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'AA123') {
      setIsAdminAuth(true);
    } else {
      alert("Galat Admin credentials! Username: admin, Password: AA123 use karein.");
    }
  };

  // ==========================================
  // 🎨 PREMIUM INLINE STYLES SHEET
  // ==========================================
  const containerStyle = {
    paddingTop: '120px',
    paddingBottom: '60px',
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: '"Segoe UI", Roboto, sans-serif',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const loginCardStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '24px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    border: '1px solid #e2e8f0',
    maxWidth: '360px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    margin: '10px 0',
    border: '1px solid #cbd5e1',
    borderRadius: '12px',
    fontSize: '15px',
    backgroundColor: '#f8fafc',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const loginBtnStyle = {
    width: '100%',
    backgroundColor: '#dc2626', // Premium Red Theme for Restricted AA Section
    color: '#ffffff',
    border: 'none',
    padding: '14px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: '15px',
    boxShadow: '0 4px 12px rgba(220,38,38,0.25)'
  };

  const dashboardWrapper = {
    width: '100%',
    maxWidth: '1200px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '40px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
    border: '1px solid #e2e8f0',
    boxSizing: 'border-box',
    alignSelf: 'flex-start'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    textAlign: 'left'
  };

  const thStyle = {
    backgroundColor: '#0f172a',
    color: '#ffffff',
    padding: '16px',
    fontWeight: '600',
    fontSize: '14px',
    letterSpacing: '0.5px'
  };

  const tdStyle = {
    padding: '16px',
    borderBottom: '1px solid #e2e8f0',
    fontSize: '15px',
    color: '#334155',
    lineHeight: '1.5'
  };

  // 1. If Admin is NOT authenticated, show corporate protected lock screen
  if (!isAdminAuth) {
    return (
      <div style={containerStyle}>
        <div style={loginCardStyle}>
          <h2 style={{ textAlign: 'center', fontWeight: '800', color: '#dc2626', marginBottom: '8px', fontSize: '24px' }}>
            Admin Login (AA)
          </h2>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '13px', marginBottom: '25px' }}>
            Secure gateway portal for wash control center
          </p>
          <form onSubmit={handleLogin}>
            <input 
              type="text" 
              placeholder="Admin Username" 
              onChange={e => setCredentials({ ...credentials, username: e.target.value })} 
              style={inputStyle} 
              required 
            />
            <input 
              type="password" 
              placeholder="Security Password" 
              onChange={e => setCredentials({ ...credentials, password: e.target.value })} 
              style={inputStyle} 
              required 
            />
            <button type="submit" style={loginBtnStyle}>Access Live Dashboard</button>
          </form>
        </div>
      </div>
    );
  }

  // 2. If Admin is authenticated, show full premium database data center table
  return (
    <div style={{ ...containerStyle, alignItems: 'flex-start', padding: '120px 40px 60px' }}>
      <div style={dashboardWrapper}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #f1f5f9', paddingBottom: '15px', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', margin: 0 }}>
            🚗 AutoCare Control Panel
          </h2>
          <span style={{ backgroundColor: '#fef2f2', color: '#dc2626', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '700', border: '1px solid #fee2e2' }}>
            Live Secure Link
          </span>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={{ ...thStyle, borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }}>User Name</th>
                <th style={thStyle}>Details (Vehicle/Contact/Address)</th>
                <th style={thStyle}>Booking Request Time</th>
                <th style={{ ...thStyle, borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }}>Reach Time (Wash Date)</th>
              </tr>
            </thead>
            <tbody>
              {bookingsList.length > 0 ? (
                bookingsList.map((user) => (
                  <tr key={user._id} className="admin-table-row">
                    <td style={{ ...tdStyle, fontWeight: '700', color: '#0f172a' }}>{user.fullName}</td>
                    <td style={tdStyle}>
                      <div style={{ fontWeight: '600', color: '#2563eb', marginBottom: '4px' }}>🚗 {user.vehicle}</div>
                      <div style={{ fontSize: '13px', color: '#64748b' }}>📞 {user.phone}</div>
                      <div style={{ fontSize: '13px', color: '#64748b', maxWidth: '350px' }}>🏠 {user.address}</div>
                    </td>
                    <td style={{ ...tdStyle, fontSize: '13px', color: '#64748b' }}>{user.bookingTime}</td>
                    <td style={{ ...tdStyle, fontWeight: '700', color: '#16a34a' }}>🎯 {user.reachTime}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ ...tdStyle, textAlign: 'center', padding: '40px', color: '#94a3b8', fontWeight: '500' }}>
                    🔍 Abhi database mein koi booking record register nahi hua hai.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;