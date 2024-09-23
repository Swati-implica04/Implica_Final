import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css"; // Import custom CSS for additional styling
import Logo from "../assets/images/Implica_full_dark_transparent_png.png";
import AboutUsDropdown from "./AboutusDropdown";
import ServicesDropdown from "./serviceDropdown";
import IndustriesDropdown from "./Industury";
import CareerDropdown from "./careerdropdown";
import ProductsDropdown from "./product";
import InsightsDropdown from "./insights";
 
const CustomNavbar: React.FC = () => {
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
 
  const handleDropdownClick = (dropdownName: string) => {
    setExpandedDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };
 
  const renderDropdownIcon = (dropdownName: string) => {
    return expandedDropdown === dropdownName ? (
      <FaChevronUp className="dropdown-icon" />
    ) : (
      <FaChevronDown className="dropdown-icon" />
    );
  };
 
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setExpandedDropdown(null); // Close dropdown if clicked outside
    }
  };
 
  const handleDropdownItemClick = () => {
    setExpandedDropdown(null); // Close dropdown when clicking inside
  };
 
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
 
  return (
    <>
      <Navbar expand="lg" fixed="top" className="custom-navbar">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src={Logo} alt="Company Logo" className="responsive-logo" style={{width:'270px'}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            {/* Center-aligned nav items */}
            <Nav className="navbar-nav-center">
              <Nav.Link className="lo" onClick={() => handleDropdownClick("about-us")}>
                About Us {renderDropdownIcon("about-us")}
              </Nav.Link>
              <Nav.Link className="lo" onClick={() => handleDropdownClick("services")}>
                Services {renderDropdownIcon("services")}
              </Nav.Link>
              <Nav.Link className="lo" onClick={() => handleDropdownClick("industries")}>
                Industries {renderDropdownIcon("industries")}
              </Nav.Link>
              <Nav.Link className="lo" onClick={() => handleDropdownClick("career")}>
                Career {renderDropdownIcon("career")}
              </Nav.Link>
              <Nav.Link className="lo" onClick={() => handleDropdownClick("products")}>
                Products {renderDropdownIcon("products")}
              </Nav.Link>
            </Nav>
 
            {/* Right-aligned nav items */}
            <Nav className="navbar-nav-right" style={{paddingRight:"40px"}}>
              <Nav.Link className="lo" as={Link} to="/contact">
                Contact Us
              </Nav.Link>
              <Nav.Link className="lo" href="#worldwide">
                Worldwide
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
 
      {/* Full-width dropdown */}
      {expandedDropdown && (
        <div
          ref={dropdownRef}
          className={`full-width-dropdown ${expandedDropdown ? "show" : ""}`}
          onClick={handleDropdownItemClick}
        >
          <Container>
            {expandedDropdown === "about-us" && <AboutUsDropdown />}
            {expandedDropdown === "services" && <ServicesDropdown />}
            {expandedDropdown === "industries" && <IndustriesDropdown />}
            {expandedDropdown === "career" && <CareerDropdown />}
            {expandedDropdown === "products" && <ProductsDropdown />}
            {expandedDropdown === "insights" && <InsightsDropdown />}
          </Container>
        </div>
      )}
    </>
  );
};
 
export default CustomNavbar;