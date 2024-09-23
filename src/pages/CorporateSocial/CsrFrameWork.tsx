import React from 'react';
import './CsrFrameWork.css';
import backImage from "../../assets/images/Leonardo_Lightning_neon_light_through_city_timelapse_fast_3.jpg";

const CSRFrameWork = () => {
  const pillars = [
    { id: 1, title: 'Lorem ipsum dolor sit amet', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' },
    { id: 2, title: 'Lorem ipsum dolor sit amet', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' },
    { id: 3, title: 'Lorem ipsum dolor sit amet', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' },
    { id: 4, title: 'Lorem ipsum dolor sit amet', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' }
  ];

  return (
    <div className="csr-framework-container">
      {/* Header Section */}
      <div className="csr-framework-header-container">
        <div className="csr-framework-header">
          <h1>Our CSR framework is built around four strategic pillars that drive impact</h1>
        </div>
      </div>
      
      {/* Pillar Section */}
      <div className="csr-framework-pillars-container">
        <div className="csr-framework-pillars">
          {pillars.map(pillar => (
            <div key={pillar.id} className="pillar-card">
              <img src={backImage} alt={pillar.title} className="pillar-image" />
              <div className="pillar-content">
                <h2>{pillar.title}</h2>
                <p>{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CSRFrameWork;
