// MediaKit.tsx
import React from 'react';
import './MediaKit.css';

const MediaKit = () => {
  return (
    <div className="media-kit-container">
      <h1>Media Kit</h1>
      <div className="media-kit-grid">
        <div className="media-image-placeholder"></div>
        <div className="media-image-placeholder"></div>
      </div>
      <div className="download-links">
        <div className="download-section">
          <ul>
            <li><a href="#png">📄 Download the PNG File</a></li>
            <li><a href="#ai">📄 Download the AI File</a></li>
            <li><a href="#svg">📄 Download the SVG File</a></li>
          </ul>
        </div>
        <div className="download-section">
          <ul>
            <li><a href="#png">📄 Download the PNG File</a></li>
            <li><a href="#ai">📄 Download the AI File</a></li>
            <li><a href="#svg">📄 Download the SVG File</a></li>
          </ul>
        </div>
      </div>
      <div className="core-team-section">
    <h3>IMAGES OF CORE TEAM</h3>
    <div className="team-grid">
        {/* Left column with Team Member 1 and 2 */}
        <div className="team-column">
        <div className="team-member">
            <div className="team-info">
            <span className="name">Team Member Name 1</span>
            <span className="designation">Designation</span>
            </div>
            <span className="download-icon">⬇️</span>
        </div>
        <div className="team-member">
            <div className="team-info">
            <span className="name">Team Member Name 2</span>
            <span className="designation">Designation</span>
            </div>
            <span className="download-icon">⬇️</span>
        </div>
        </div>
        {/* Right column with Team Member 3 */}
        <div className="team-column">
        <div className="team-member">
            <div className="team-info">
            <span className="name">Team Member Name 3</span>
            <span className="designation">Designation</span>
            </div>
            <span className="download-icon">⬇️</span>
        </div>
        </div>
    </div>
      </div>
    </div>
  );
};

export default MediaKit;
