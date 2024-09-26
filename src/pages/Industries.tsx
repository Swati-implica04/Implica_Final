import React, { useState } from "react";
import "./Industries.css";
import { FaChevronRight, FaPlane, FaIndustry, FaCar, FaGasPump, FaFileMedical, FaSuitcaseRolling, FaCity, FaShuttleVan, FaTractor, FaHamburger, FaBookReader, FaFileInvoiceDollar, FaUniversity, FaHandHoldingUsd, FaBasketballBall, FaTshirt, FaAtom, FaGem, FaPagelines, FaShip, FaDice, FaToilet, FaStore, FaCapsules, FaDna, FaTruckLoading, FaLaptop, FaPeopleCarry, FaShieldAlt, FaPhoneAlt, FaUserAstronaut, FaBrain, FaRobot, FaSubway, FaChargingStation, FaGamepad, FaTree, FaCommentsDollar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const industriesData = [
  { name: "Aviation", icon: <FaPlane /> },
  { name: "Manufacturing", icon: <FaIndustry /> },
  { name: "Automotive", icon: <FaCar /> },
  { name: "Energy and Utilities", icon: <FaGasPump /> },
  { name: "Healthcare", icon: <FaFileMedical /> },
  { name: "Hospitality and Tourism", icon: <FaSuitcaseRolling /> },
  { name: "Real Estate", icon: <FaCity /> },
  { name: "Agriculture", icon: <FaTractor /> },
  { name: "Food and Beverage", icon: <FaHamburger /> },
  { name: "Education", icon: <FaBookReader /> },
  { name: "Insurance", icon: <FaFileInvoiceDollar /> },
  { name: "Banking", icon: <FaUniversity /> },
  { name: "Private Equity", icon: <FaHandHoldingUsd /> },
  { name: "Sports", icon: <FaBasketballBall /> },
  { name: "Fashion and Apparel", icon: <FaTshirt /> },
  { name: "Chemicals", icon: <FaAtom /> },
  { name: "Mining and Metals", icon: <FaGem /> },
  { name: "Environmental Services", icon: <FaPagelines /> },
  { name: "Marine and Shipping", icon: <FaShip /> },
  { name: "Gaming and Casinos", icon: <FaDice /> },
  { name: "Waste Management", icon: <FaToilet /> },
  { name: "Wholesale Distribution", icon: <FaStore /> },
  { name: "Pharmaceuticals", icon: <FaCapsules /> },
  { name: "Biotechnology", icon: <FaDna /> },
  { name: "E-commerce", icon: <FaTruckLoading /> },
  { name: "Information Technology", icon: <FaLaptop /> },
  { name: "Nonprofit Organizations", icon: <FaPeopleCarry /> },
  { name: "Cybersecurity", icon: <FaShieldAlt /> },
  { name: "Telecommunications", icon: <FaPhoneAlt /> },
  { name: "Space Exploration & Aerospace", icon: <FaUserAstronaut /> },
  { name: "Artificial Intelligence", icon: <FaBrain /> },
  { name: "Robotics", icon: <FaRobot /> },
  { name: "Rail Transportation", icon: <FaSubway /> },
  { name: "EV Infrastructure", icon: <FaChargingStation /> },
  { name: "E-sports", icon: <FaGamepad /> },
  { name: "Carbon Capture and Utilization (CCU)", icon: <FaTree /> },
  { name: "Venture Capital", icon: <FaCommentsDollar /> },
];

const Industries = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/industry');
  };

  const handleViewAllClick = () => {
    setExpanded(!expanded);
  };

  // Control how many items are shown based on expanded state
  const visibleIndustries = expanded ? industriesData : industriesData.slice(0, 10);

  return (
    <section className="industries-section">
      <h2 className="industries-title">Industries</h2>
      <div className={`industries-list ${expanded ? "expanded" : "collapsed"}`}>
        {visibleIndustries.map((industry, index) => (
          <div className="industry-item" key={index}>
            <span className="industry-icon">{industry.icon}</span>
            <span className="industry-name">{industry.name}</span>
            <span className="industry-arrow"><FaChevronRight/></span>
          </div>
        ))}
      </div>
      <button
        className="view-all-industries-button"
        style={{ marginBottom: '20px' }}
        onClick={handleViewAllClick}
      >
        {expanded ? 'Show Less' : 'View all Industries'} <span>↗</span>
      </button>
    </section>
  );
};

export default Industries;
