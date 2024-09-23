import React, { useState } from "react";
import "./Industries.css";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const industriesData = [
  "Aviation", "Manufacturing",
  "Automotive", "Energy and Utilities",
  "Health Care", "Hospitality and Tourism",
  "Real Estate", "Agriculture",
  "Education", "E Commerce"
];

const Industries = () => {
  const [expandedTile, setExpandedTile] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/industry');
  };
  const handleTileClick = (index: number) => {
    setExpandedTile((prev) => (prev === index ? null : index));
  };

  return (
    <section className="industries-section">
      <h2 className="industries-title">Industries</h2>
      <div className="industries-list">
        {industriesData.map((industry, index) => (
          <div
            className="industry-item"
            key={index}
            onClick={() => handleTileClick(index)}
          >
            <span className="industry-icon">🛒</span>
            <span className="industry-name">{industry}</span>
            {expandedTile === index && (
              <span className="industry-arrow">
                                <FaChevronRight /></span> /* The arrow or additional content */
            )}
          </div>
        ))}
      </div>
      <button className="view-all-industries-button" style={{marginBottom:'20px'}} onClick={handleClick}>
        View all Industries <span>↗</span>
      </button>
    </section>
  );
};

export default Industries;
