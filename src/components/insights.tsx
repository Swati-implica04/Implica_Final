import React from "react";
import "./dropdown.css"
const InsightsDropdown: React.FC = () => {
  return (
    <div className="inScard">
      <div className="insights-sidebar">
        <p className="Career">Insights</p>
        <ul className="insights-categories">
          <li>IGC Perspectives</li>
          <li>Implica Features</li>
          <li>News</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div className="insights-content">
        <div className="insights-category">
          <p className="in">Blogs</p>
          <div className="insights-items">
            <div className="insight-item">
              <div className="imag"></div>
               <p className="imgText">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="insight-item">
              <div className="imag"></div>
               <p className="imgText">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <div className="insights-category">
          <p className="in">News</p>
          <div className="insights-items">
            <div className="insight-item">
              <div className="imag"></div>
               <p className="imgText">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="insight-item">
              <div className="imag"></div>
               <p className="imgText">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsDropdown;