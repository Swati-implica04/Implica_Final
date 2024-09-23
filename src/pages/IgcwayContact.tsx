import React from 'react';
import './IgcwayContact.css';

const IGC: React.FC = () => {
  return (
    <div className="igc-content">
      <h1>IGC Offices</h1>
      <div className="igc-container">
        <div className="city-list">
          <div className="city-search-container">
            <input type="text" placeholder="Enter city" className="city-search" />
            <i className="fas fa-search city-search-icon"></i> {/* Search icon */}
          </div>
          <ul>
            <li>City Name</li>
            <li>City Name</li>
            <li>City Name</li>
            <li>City Name</li>
            <li>City Name</li>
            <li>City Name</li>
            <li>City Name</li>
          </ul>
        </div>
        <div className="city-map"></div>
      </div>
    </div>
  );
};

export default IGC;
