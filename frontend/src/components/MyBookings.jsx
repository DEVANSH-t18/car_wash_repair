import React from 'react';

const MyBookings = ({ userDetails }) => {
  if (!userDetails) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '120px', color: '#64748b', fontFamily: '"Segoe UI", sans-serif' }}>
        <h3>Kripya pehle Account login ya register karein!</h3>
      </div>
    );
  }

  const containerStyle = {
    paddingTop: '120px',
    paddingBottom: '60px',
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: '"Segoe UI", Roboto, sans-serif',
    boxSizing: 'border-box'
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
    border: '1px solid #e2e8f0',
    width: '100%',
    maxWidth: '600px',
    padding: '30px',
    boxSizing: 'border-box',
    marginBottom: '20px'
  };

  const ticketStyle = {
    borderLeft: '5px solid #1a73e8',
    backgroundColor: '#f1f5f9',
    padding: '20px',
    borderRadius: '0 12px 12px 0',
    marginTop: '20px'
  };

  return (
    <div style={containerStyle}>
      {/* User Info Details Panel */}
      <div style={cardStyle}>
        <h2 style={{ color: '#0f172a', fontWeight: '800', margin: '0 0 5px 0' }}>👤 User Profile Details</h2>
        <p style={{ color: '#64748b', fontSize: '14px', margin: '0 0 20px 0' }}>AutoCare Registered Member Dashboard</p>
        
        <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', marginBottom: '20px' }} />
        
        <p style={{ margin: '10px 0', color: '#334155' }}><b>Name:</b> {userDetails.fullName}</p>
        <p style={{ margin: '10px 0', color: '#334155' }}><b>Email:</b> {userDetails.email}</p>
        <p style={{ margin: '10px 0', color: '#334155' }}><b>Phone:</b> {userDetails.phone}</p>
        <p style={{ margin: '10px 0', color: '#334155' }}><b>Address:</b> {userDetails.address}</p>
      </div>

      {/* Active Washing Booking Panel */}
      <div style={cardStyle}>
        <h2 style={{ color: '#0f172a', fontWeight: '800', margin: '0 0 5px 0' }}>🚗 Active Service Ticket</h2>
        <p style={{ color: '#64748b', fontSize: '14px', margin: '0 0 10px 0' }}>Aapki scheduled car maintenance ka status</p>
        
        <div style={ticketStyle}>
          <h4 style={{ margin: '0 0 10px 0', color: '#1a73e8', fontSize: '18px' }}>Status: Order Placed & Confirmed</h4>
          <p style={{ margin: '6px 0', color: '#475569' }}><b>Vehicle Registered:</b> {userDetails.vehicle}</p>
          <p style={{ margin: '6px 0', color: '#475569' }}><b>Booking Timestamp:</b> {userDetails.bookingTime}</p>
          <p style={{ margin: '10px 0 0 0', color: '#0f172a', fontSize: '16px' }}>
            📅 <b>Our Team Will Reach On: <span style={{ color: '#16a34a' }}>{userDetails.reachTime}</span></b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;