import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./dropdown.css"
const AboutUsDropdown: React.FC = () => {
  return (
    <div className="career-section">
      <p className="Career">About us</p>
      <div className="career-content">
        <div className="dropdown-section">
          <p className="head">Our organisation</p>
          <Nav.Link as={Link} to="/overview">Overview</Nav.Link>
          <Nav.Link as={Link} to="/leadership">Our Leadership</Nav.Link>
          <Nav.Link as={Link} to="/mission">Purpose, Mission and Values</Nav.Link>
          <Nav.Link as={Link} to="/News">News Room</Nav.Link>
          <Nav.Link as={Link} to="/alliances">Global Alliances</Nav.Link>
        </div>
        <div className="dropdown-section">
          <p className="head">Values</p>
          <Nav.Link as={Link} to="/corporateSocial">Corporate Social Responsibility</Nav.Link>
          <Nav.Link as={Link} to="/sustainability">Corporate Sustainability</Nav.Link>
          <Nav.Link as={Link} to="/diversity">Diversity, Equality & Inclusion</Nav.Link>
        </div>
        <div className="dropdown-section">
          <p className="head">IGC Way</p>
          <Nav.Link href="#foundation">Implica Foundation</Nav.Link>
          <Nav.Link as={Link} to = "/capital">Implica Capital</Nav.Link>
          <Nav.Link as={Link} to="/ventures">Implica Ventures</Nav.Link>
          <Nav.Link  as={Link} to="/implica-ai">Implica A.I.</Nav.Link>
          {/* <Nav.Link href="#consulting">Implica Consulting</Nav.Link> */}
          {/* <Nav.Link href="#private">Implica Private</Nav.Link> */}
        </div>
        <div className="featured-section">
          <p className="fss">Featured</p>
          <div className="featured-items">
            <div className="featured-item">
              <div className="imag"></div>
              {/* https://www.linkedin.com/posts/implica-global-corporation_implica-global-acquires-knocksy-spzoo-ugcPost-7209157842841288705-JVOR/?utm_source=share&utm_medium=member_desktop */}
              <p className="imgText">Implica Global Corporation Announces Acquisition of Knocksy Sp.zo.o (Poland) &
              Knocksy oü (Estonia)</p>
            </div>
            <div className="featured-item">
              <div className="imag"></div>
              <p className="imgText">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDropdown;