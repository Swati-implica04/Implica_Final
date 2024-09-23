import React from "react";
import "./DiversityCmtmnt.css"; // Ensure this path is correct

const DiversityCmtmnt: React.FC = () => {
  return (
    <div className="DiversityCmtmnt">
      {/* First Section with CSR Banner */}
      <div className="CSRBanner">
        <div className="CSRText">
          <span>
            At Implica Global Corporation, we recognize that di in creating a future where businesses
            and communities grow together, fostering social and environmental progress. Our
            Corporate Social Responsibility (CSR) initiatives are rooted in our unwavering
            commitment to building a sustainable world, advancing social equity, and creating
            lasting value for the communities we serve.
          </span>
        </div>
      </div>

      {/* Second Section with Commitment to Sustainable Development */}
      <div className="CommitmentSection">
        <div className="CommitmentContent">
          <div className="CommitmentTextLeft">
            Our Commitment to Sustainable Development
          </div>
          <div className="CommitmentTextRight">
            <span>
            As a global leader, Implica Global Corporation views CSR as an essential part of
            our identity. Through our comprehensive CSR programs, we address some of the
            world’s most pressing challenges, such as access to education, environmental
            conservation, and social inclusion.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiversityCmtmnt;
