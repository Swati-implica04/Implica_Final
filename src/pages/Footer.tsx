import "./Footer.css";
import Logo from "../assets/images/Implica_full_dark_transparent_png.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img src={Logo} alt="Company Logo" className="responsive-log" style={{width:'300px',height:"auto"}}/>
          <p className="footer-description">
            Implica Global Corporation (Igc) refers to the global organization
            and may refer to one or more of its subsidiary companies, each
            serving different markets, locations, or demographics. Headquartered
            in Tallinn, Estonia, Igc operates with Audit governance based in the
            USA & E.U. Each subsidiary is tailored to meet the unique needs of
            its specific region or sector, ensuring a localized approach while
            maintaining global standards.
          </p>
          <div className="footer-icons">
            <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/your-page" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com/your-page" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/your-page" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <p className="footer-copyright" style={{marginTop:'8px'}}>
            ©2024 Implica Global Corporation OÜ
          </p>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <ul className="footer-links">
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#connect">Connect Us</a>
            </li>
            <li>
              <a href="#locations">Our Locations</a>
            </li>
            <li>
              <a href="#sustainability">Sustainability</a>
            </li>
          </ul>
          <ul className="footer-links">
            <li>
              <a href="#privacy">Privacy Notice</a>
            </li>
            <li>
              <a href="#cookie">Cookie Policy</a>
            </li>
            <li>
              <a href="#disclaimer">Disclaimer</a>
            </li>
            <li>
              <a href="#security">Security Policy</a>
            </li>
          </ul>
        </div>

        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;
