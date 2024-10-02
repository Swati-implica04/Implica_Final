import React from "react";
import "./CorporateSocial.css"; // Ensure the path to the CSS file is correct
import GlobalCorp from "./GlobalCorp";
import CorpCEO from "./CorpCEO";
import CSRFrameWork from "./CsrFrameWork";
import Footer from "../Footer";

const CorporateSocial: React.FC = () => {
  return (
    <div>
      <div className="CorporateSocial">
        <div className="white-box">
          <span className="box_textStyle">
            Corporate Social Responsibility: Driving Purpose with Impact
          </span>
        </div>
      </div>
      <GlobalCorp />
      <CorpCEO />
      <CSRFrameWork />
      <Footer />
    </div>
  );
};

export default CorporateSocial;
