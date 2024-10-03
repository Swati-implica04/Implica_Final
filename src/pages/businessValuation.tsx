import React from 'react';
import './businessValuation.css';
import InteractiveGlobe from './earth';

const BusinessValuationSection = () => {
  return (
    <div className="valuation-section">
      <div className="text-content">
        <div className="main-text">
          <span className="sd">
            Supporting over <span className="highlight-text">$16.7 billion</span> in combined business valuation{" "}
          </span>
          <span className="sd">
            across <span className="highlight-secondary">500+ diverse</span> businesses.
          </span>
        </div>

        <div className="supporting-text">
          <p className="high">
            From <span className="highlight-tertiary">startups</span> to <span className="highlight-tertiary">multinational corporations</span> to{' '}
            <span className="highlight-tertiary">government entities</span>, our expertise knows no bounds.
          </p>
        </div>
      </div>
      <div className="globe-container">
        <InteractiveGlobe />
      </div>
    </div>
  );
};

export default BusinessValuationSection;