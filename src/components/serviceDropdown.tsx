import React from "react";
import "./dropdown.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
const ServicesDropdown: React.FC = () => {
  return (
    <div className="services-section ">
      <h2 style={{ textAlign: "left", paddingLeft: "25px" }}>Services</h2>
      <div className="services-grid">
        <div className="service-item">
          <Nav.Link
            as={Link}
            to="/implica-digital"
            style={{
              fontFamily: "var(--TypographyFontFamilyBody-WorkSans)",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "28px",
              letterSpacing: "0.01em",
              textAlign: "left",
              color: "rgba(255, 255, 255, 1)", // Optional: customize text color
              textDecoration: "none", // Optional: remove underline
            }}
          >
            Implica Digital
          </Nav.Link>
          <p className="imgText"     style={{
      fontFamily: "var(--TypographyFontFamilyBody-WorkSans)",
      fontSize: "14px", // Body/B3/B3-Regular
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0.01em",
      textAlign: "left",
      color: "rgba(173, 165, 155, 1)", // Optional: customize text color
    }}>
            Providing seamless tech services and innovative digital solutions
            for everyday operations.
          </p>
        </div>
        <div className="service-item">
          <Nav.Link
            as={Link}
            to="/implica-ai"
            style={{
              fontFamily: "var(--TypographyFontFamilyBody-WorkSans)",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "28px",
              letterSpacing: "0.01em",
              textAlign: "left",
              color: "rgba(255, 255, 255, 1)", // Optional: customize text color
              textDecoration: "none", // Optional: remove underline
            }}
          >
            Implica A.I.
          </Nav.Link>
          <p className="imgText"     style={{
      fontFamily: "var(--TypographyFontFamilyBody-WorkSans)",
      fontSize: "14px", // Body/B3/B3-Regular
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0.01em",
      textAlign: "left",
      color: "rgba(173, 165, 155, 1)", // Optional: customize text color
    }}>
            Harness the power of artificial intelligence to revolutionize your
            operations.
          </p>
        </div>
        <div className="service-item">
          <Nav.Link
            as={Link}
            to="/implica-consulting"
            style={{
              fontFamily: "var(--TypographyFontFamilyBody-WorkSans)",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "28px",
              letterSpacing: "0.01em",
              textAlign: "left",
              color: "rgba(255, 255, 255, 1)", // Optional: customize text color
              textDecoration: "none", // Optional: remove underline
            }}
          >
            Implica Consulting
          </Nav.Link>
          <p className="imgText"     style={{
      fontFamily: "var(--TypographyFontFamilyBody-WorkSans)",
      fontSize: "14px", // Body/B3/B3-Regular
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0.01em",
      textAlign: "left",
      color: "rgba(173, 165, 155, 1)", // Optional: customize text color
    }}>
            Comprehensive consulting solutions across management, strategy,
            operations, and marketing to drive sustainable local and global
            business growth and innovation.
          </p>
        </div>
        {/* <div className="service-item">
          <h3>Implica Private</h3>
           <p className="imgText">
            Connecting your vision to unmatched expertise. We help you lead and
            become the global trend, delivering bespoke solutions and value at
            every milestone.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ServicesDropdown;
