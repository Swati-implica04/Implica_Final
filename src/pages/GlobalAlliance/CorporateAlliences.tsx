import React from 'react';
import './CorporateAllience.css';
import FormDesign from '../FormDesign';
import Footer from '../Footer';

const CorporateAllience: React.FC = () => {
  return (
    <div className="alliances-section">
      {/* Corporate Alliances */}
      <div className="corporate-alliances">
        <h2>Corporate Alliances</h2>
        <div className="alliance-logos corporate">
          <div className="logo-box"></div>
          <div className="logo-box"></div>
          <div className="logo-box"></div>
          <div className="logo-box"></div>
          <div className="logo-box"></div>
          <div className="logo-box"></div>
        </div>
        <div className="alliance-logos corporate">  
          <div className="logo-box"></div>
          <div className="logo-box"></div>
          <div className="logo-box"></div>
          <div className="logo-box"></div>
          <div className="logo-box"></div>
          <div className="logo-box"></div>
        </div>
      </div>

      {/* Academic Alliances */}
      <div className="academic-alliances">
        <h2>Academic Alliances</h2>
        <div className="alliance-logos academic">
          <div className="logo-box"></div>
          <div className="logo-box"></div>
          <div className="logo-box"></div>
          <div className="logo-box"></div>
          <div className="logo-box"></div>
          <div className="logo-box"></div>
        </div>
      </div>
      <FormDesign/>
      <Footer/>
    </div>
  );
};

export default CorporateAllience;
