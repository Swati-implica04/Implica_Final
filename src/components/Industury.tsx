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
          <Nav.Link href="#industries/ecommerce">E-commerce</Nav.Link>
          <Nav.Link href="#industries/manufacturing">Manufacturing</Nav.Link>
          <Nav.Link href="#industries/automotive">Automotive</Nav.Link>
          <Nav.Link href="#industries/realestate">Real Estate</Nav.Link>
          <Nav.Link href="#industries/logistics">Transportation and Logistics</Nav.Link>
          <Nav.Link href="#industries/agriculture">Agriculture</Nav.Link>
          <Nav.Link href="#industries/insurance">Insurance</Nav.Link>
          <Nav.Link href="#industries/banking">Banking</Nav.Link>
          <Nav.Link href="#industries/equity">Private Equity</Nav.Link>
          <Nav.Link href="#industries/mining">Mining and Metals</Nav.Link>
          <Nav.Link href="#industries/environmental">Environmental Services</Nav.Link>
          <Nav.Link href="#industries/marine">Marine and Shipping</Nav.Link>
        </div>
        <div className="view-all-container">
          <Nav.Link as={Link} to={"./industry"} className="view-all-link">
            View all <FaSearch />
          </Nav.Link>
        </div>
      </div>
  </div>
  );
};
 
export default IndustriesDropdown;