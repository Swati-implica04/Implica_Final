import React from "react";
import "./GlobalAllience.css";
import CorporateAllience from "./CorporateAlliences";

const GlobalAlliance: React.FC = () => {
    return (
        <div>
            <div className="GlobalAlliance">
                <div className="overlay"></div> {/* Overlay for the background */}
                <h1>Our Partners</h1>
                <p className="GlobalAlliance_text1">
                    At Implica Global Corporation, we believe in the power of collaboration. Through our alliances with industry-leading organizations, public bodies, foundations, and academic institutions, we drive transformation, enhance performance, and foster growth. By co-creating and innovating with our partners, we deliver integrated solutions that empower businesses to thrive in a constantly evolving landscape.
                </p>
                <p className="GlobalAlliance_text2">
                    We believe partnerships and alliances are the catalysts for real, transformative change. By uniting with leading innovators and global organizations, we not only extend our reach but also amplify our impact, accelerating progress, driving innovation, and creating lasting change for businesses, industries, and communities worldwide.                </p>
                <span>
                    Together with our partners, we don’t just adapt to change; we lead it.
                </span>
                <div className="ContactLink">
                    <a href="/contact">Contact Us</a>
                </div>
            </div>
            <CorporateAllience/>
        </div>
    );
};

export default GlobalAlliance;
