import React, { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Register = ({ setIsLoggedIn, setUserDetails, setActiveTab }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '', address: '', vehicle: '', phone: '', email: '', password: '', otp: ''
  });
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // 📧 Real Email OTP Sender API Gateway
  const sendOtp = async () => {
    if (!formData.email) return alert("Pehle Email ID daliye, usi par real OTP jayega!");
    
    try {
      const res = await fetch(`${API_URL}/api/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email })
      });
      const data = await res.json();
      
      if (res.ok) {
        setOtpSent(true);
        alert("Real OTP aapki Email ID par bhej diya gaya hai! Inbox check karein.");
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Backend link block ho rahi hai! Check karein ki server.js running hai.");
    }
  };

  // 🚀 Full Integrated Backend API Form Handler with Real Verification
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      try {
        const res = await fetch(`${API_URL}/api/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        const data = await res.json();
        
        if (res.ok) {
          setUserDetails(data.user);
          setIsLoggedIn(true);
          alert(`Registered Successfully! Allotted Date: ${data.user.reachTime}`);
          setActiveTab('bookings'); 
        } else {
          alert(data.message);
        }
      } catch (err) {
        alert("Backend connection failed! Make sure server.js is running.");
      }
    } else {
      // Login Logic Gateway
      try {
        const res = await fetch(`${API_URL}/api/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: formData.email, password: formData.password })
        });
        const data = await res.json();
        
        if (res.ok) {
          setUserDetails(data.user);
          setIsLoggedIn(true);
          alert("Sign In Successful!");
          setActiveTab('bookings'); 
        } else {
          alert(data.message);
        }
      } catch (err) {
        alert("Backend connection failed!");
      }
    }
  };

  // ==========================================
  // 🎨 PREMIUM INLINE STYLES SHEET
  // ==========================================
  const wrapperStyle = {
    paddingTop: '100px',
    paddingBottom: '50px',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f5f9',
    fontFamily: '"Segoe UI", Roboto, sans-serif',
    boxSizing: 'border-box'
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '24px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
    border: '1px solid #e2e8f0',
    maxWidth: '460px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const titleStyle = {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: '26px',
    marginBottom: '8px',
    color: '#0f172a',
    letterSpacing: '-0.5px'
  };

  const subtitleStyle = {
    textAlign: 'center',
    color: '#64748b',
    fontSize: '14px',
    marginBottom: '25px'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    margin: '8px 0',
    border: '1px solid #cbd5e1',
    borderRadius: '12px',
    fontSize: '15px',
    color: '#334155',
    boxSizing: 'border-box',
    backgroundColor: '#f8fafc',
    outline: 'none',
    transition: 'border-color 0.2s'
  };

  const otpRowStyle = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    width: '100%',
    margin: '8px 0'
  };

  const otpBtnStyle = {
    backgroundColor: '#0f172a',
    color: '#ffffff',
    border: 'none',
    padding: '0 18px',
    borderRadius: '12px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    height: '46px',
    whiteSpace: 'nowrap',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
  };

  const submitBtnStyle = {
    width: '100%',
    backgroundColor: '#1a73e8',
    color: '#ffffff',
    border: 'none',
    padding: '14px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: '20px',
    boxShadow: '0 4px 12px rgba(26,115,232,0.25)',
    transition: 'background-color 0.2s'
  };

  const switchContainerStyle = {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '14px',
    color: '#64748b'
  };

  const switchLinkStyle = {
    background: 'none',
    border: 'none',
    color: '#1a73e8',
    fontWeight: '700',
    cursor: 'pointer',
    textDecoration: 'underline',
    marginLeft: '5px',
    padding: '0'
  };

  return (
    <div style={wrapperStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>
          {isSignUp ? "Create Premium Account" : "Welcome Back"}
        </h2>
        <p style={subtitleStyle}>
          {isSignUp ? "Ghar baithe service book karne ke liye register karein" : "Apna account login karke status track karein"}
        </p>

        <form onSubmit={handleSubmit}>
          {/* Sign Up Mode Fields */}
          {isSignUp && (
            <>
              <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required style={inputStyle} />
              <input type="text" name="address" placeholder="Full Address (Where car is parked)" onChange={handleChange} required style={inputStyle} />
              <input type="text" name="vehicle" placeholder="Vehicle Model (e.g. Maruti Swift / BMW X3)" onChange={handleChange} required style={inputStyle} />
            </>
          )}
          
          {/* Common Fields */}
          <input type="email" name="email" placeholder="Email ID" onChange={handleChange} required style={inputStyle} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required style={inputStyle} />
          
          {/* Sign Up Specific Phone and OTP Row */}
          {isSignUp && (
            <>
              <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required style={inputStyle} />
              
              <div style={otpRowStyle}>
                <input type="text" name="otp" placeholder="Enter OTP" onChange={handleChange} required style={{...inputStyle, margin: '0', flex: '1'}} />
                <button type="button" onClick={sendOtp} style={otpBtnStyle}>
                  {otpSent ? "Resend OTP" : "Send OTP"}
                </button>
              </div>
            </>
          )}

          <button type="submit" style={submitBtnStyle}>
            {isSignUp ? "Register & Book Service" : "Sign In to Account"}
          </button>
        </form>

        <div style={switchContainerStyle}>
          {isSignUp ? "Already have an account?" : "New to AutoCare?"} 
          <button onClick={() => setIsSignUp(!isSignUp)} style={switchLinkStyle}>
            {isSignUp ? "Sign In" : "Register here"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;