import React from 'react';

const LandingPage = ({ setActiveTab, isLoggedIn }) => {
  
  // Inline Styles
  const pageContainer = {
    paddingTop: '70px',
    fontFamily: '"Segoe UI", Roboto, sans-serif',
    color: '#1a202c',
    backgroundColor: '#ffffff'
  };

  const sectionStyle = {
    padding: '80px 50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    boxSizing: 'border-box'
  };

  const heroGrid = {
    display: 'flex',
    maxWidth: '1200px',
    width: '100%',
    gap: '50px',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  const mainHeading = {
    fontSize: '48px',
    fontWeight: '800',
    lineHeight: '1.2',
    marginBottom: '20px',
    color: '#0f172a'
  };

  const subText = {
    fontSize: '18px',
    color: '#4a5568',
    lineHeight: '1.6',
    marginBottom: '30px',
    maxWidth: '550px'
  };

  const ctaButton = {
    backgroundColor: '#1a73e8',
    color: '#white',
    color: '#fff',
    border: 'none',
    padding: '15px 35px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 6px 20px rgba(26,115,232,0.3)'
  };

  const imageContainer = {
    flex: '1',
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center'
  };

  const premiumImg = {
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
    width: '100%',
    maxWidth: '500px',
    height: '350px',
    objectFit: 'cover'
  };

  const serviceGrid = {
    display: 'flex',
    gap: '30px',
    width: '100%',
    maxWidth: '1200px',
    marginTop: '40px',
    flexWrap: 'wrap'
  };

  const serviceCard = {
    flex: '1',
    minWidth: '280px',
    backgroundColor: '#f8fafc',
    padding: '40px',
    borderRadius: '20px',
    border: '1px border #f1f5f9',
    border: '1px solid #e2e8f0',
    textAlign: 'left',
    boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
    boxSizing: 'border-box'
  };

  const priceTag = {
    display: 'inline-block',
    marginTop: '15px',
    fontSize: '20px',
    fontWeight: '800',
    color: '#1a73e8'
  };

  const qaSection = {
    backgroundColor: '#0f172a',
    color: '#ffffff',
    padding: '80px 50px',
    display: 'flex',
    justifyContent: 'center'
  };

  const footerStyle = {
    backgroundColor: '#000000',
    color: '#718096',
    textAlign: 'center',
    padding: '15px 0',
    fontSize: '13px',
    letterSpacing: '1px'
  };

  return (
    <div style={pageContainer}>
      
      {/* HOME & ABOUT US SECTION */}
      <section id="home" style={{...sectionStyle, backgroundColor: '#f8fafc'}}>
        <div id="about" style={heroGrid}>
          <div style={{flex: '1', minWidth: '300px'}}>
            <h1 style={mainHeading}>
              Professional Car Wash <br/>
              <span style={{color: '#1a73e8'}}>At Your Doorstep</span>
            </h1>
            <p style={subText}>
              Aapko kahin jaane ki zaroorat nahi! Hum aapke ghar aakar aapki car ko chamkayenge aur minor repairs ko on-the-spot fix karenge. Best premium experience guaranteed.
            </p>
            <button 
              style={ctaButton}
              onClick={() => setActiveTab(isLoggedIn ? 'bookings' : 'register')}
            >
              Book a Service Now
            </button>
          </div>
          <div style={imageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=600&q=80" 
              alt="Premium Wash" 
              style={premiumImg}
            />
          </div>
        </div>
      </section>

      {/* OUR SERVICES SECTION */}
      <section id="services" style={sectionStyle}>
        <div style={{maxWidth: '1200px', width: '100%', textAlign: 'center'}}>
          <h2 style={{fontSize: '36px', fontWeight: '800', color: '#0f172a'}}>Our Premium Services</h2>
          <p style={{color: '#64748b'}}>Best packages tailored for your luxury vehicles</p>
          
          <div style={serviceGrid}>
            {/* Service 1 */}
            <div style={serviceCard}>
              <span style={{fontSize: '40px'}}>🧽</span>
              <h3 style={{fontSize: '22px', fontWeight: '700', margin: '15px 0 10px'}}>Premium Foam Wash</h3>
              <p style={{color: '#64748b', lineHeight: '1.5'}}>Deep exterior foam wash, complete interior vacuuming, premium dashboard polish, and tyre detailing.</p>
              <span style={priceTag}>₹499 onwards</span>
            </div>
            {/* Service 2 */}
            <div style={serviceCard}>
              <span style={{fontSize: '40px'}}>🔧</span>
              <h3 style={{fontSize: '22px', fontWeight: '700', margin: '15px 0 10px'}}>Minor Smart Repairs</h3>
              <p style={{color: '#64748b', lineHeight: '1.5'}}>Brake multi-check, engine oil top-up, battery health check, diagnostics, and quick on-site fixes.</p>
              <span style={priceTag}>₹999 onwards</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY ASSURANCE SECTION */}
      <section style={qaSection}>
        <div style={{...heroGrid, gap: '80px'}}>
          <div style={{flex: '1'}}>
            <h2 style={{fontSize: '36px', fontWeight: '800', color: '#38bdf8', marginBottom: '20px'}}>100% Quality Assurance</h2>
            <p style={{color: '#cbd5e1', fontSize: '17px', lineHeight: '1.7', marginBottom: '20px'}}>
              Hum sirf certified international products aur top-tier tools ka use karte hain. Hamaare saare mechanics professionals hain taaki aapki car ko mile showroom jaisa treatement.
            </p>
            <div style={{lineHeight: '2', fontWeight: '600', color: '#f1f5f9'}}>
              <p>⚡ Eco-Friendly Advanced Foam</p>
              <p>⚡ Specialized Mechanical Toolkits</p>
              <p>⚡ On-Time Execution Guarantee</p>
            </div>
          </div>
          <div style={imageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80" 
              alt="Quality Work" 
              style={{...premiumImg, opacity: 0.85}}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={footerStyle}>
        @copyright 2005
      </footer>
    </div>
  );
};

export default LandingPage;