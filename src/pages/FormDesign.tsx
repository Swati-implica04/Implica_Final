import React from 'react';
import './FormDesign.css';

const FormDesign: React.FC = () => {
  return (
    <div className="form-container">
      <div className="form-content">
        <div className="left-column">
          <h1>What's on your mind?</h1>
          <p>We would love to hear from you</p>

          <div className="checkbox-group">
            <div className="checkbox-item">
              <input type="checkbox" />
              <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" />
              <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</label>
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="form-fields">
            <div className="form-row">
              <input type="text" placeholder="Placeholder text*" />
              <input type="text" placeholder="Placeholder text*" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Placeholder text*" />
              <input type="text" placeholder="Placeholder text*" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Placeholder text*" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Placeholder text*" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Placeholder text*" />
            </div>
          </div>

          <div className="submit-button">
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDesign;
