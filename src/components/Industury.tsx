import React from "react";
import { Nav } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./dropdown.css";
import { Link } from "react-router-dom";
 
const IndustriesDropdown: React.FC = () => {
  return (
    <div className="career-section">
      <div className="Career">Industries</div>
      <div className="industries-container">
        <div className="industries-grid">
          <Nav.Link href="/industry-detail">E-commerce</Nav.Link>
          <Nav.Link href="/industry-detail">Manufacturing</Nav.Link>
          <Nav.Link href="/industry-detail">Automotive</Nav.Link>
          <Nav.Link href="/industry-detail">Real Estate</Nav.Link>
          <Nav.Link href="/industry-detail">Transportation and Logistics</Nav.Link>
          <Nav.Link href="/industry-detail">Agriculture</Nav.Link>
          <Nav.Link href="/industry-detail">Insurance</Nav.Link>
          <Nav.Link href="/industry-detail">Banking</Nav.Link>
          <Nav.Link href="/industry-detail">Private Equity</Nav.Link>
          <Nav.Link href="/industry-detail">Mining and Metals</Nav.Link>
          <Nav.Link href="/industry-detail">Environmental Services</Nav.Link>
          <Nav.Link href="/industry-detail">Marine and Shipping</Nav.Link>
        </div>
        <div className="view-all-container">
          <Nav.Link as={Link} to={"/industry"} className="view-all-link">
            View all <FaSearch />
          </Nav.Link>
        </div>
      </div>
  </div>
  );
};
 
export default IndustriesDropdown;