import React from "react";
import "./CorpCEO.css";
import ceo from "../../assets/images/beautiful-city-landscape-with-tall-buildings.jpg" 

const CorpCEO: React.FC = () => {
  return (
    <div style={{background:'white',padding:"50px"}}>
    <div className="CorpCEO">
      {/* Left section with quote */}
      <div className="CEOQuote">
        <span className="CEOQuote_pText">
          “We believe that corporate success and social responsibility go hand-in-hand. By embedding CSR into our core business strategy, we not only create value for our stakeholders but also drive positive change for the communities and ecosystems in which we operate.”
        </span>
        <span className="ceoname_span2">-Sarved Dhar Badgayan, CEO</span>
      </div>

      {/* Right section with CEO image */}
      <div className="CEOImage">
        <img src= {ceo} alt="CEO" />
      </div>
      </div>
    </div>
  );
};

export default CorpCEO;
