import React from "react";
import "./GlobalCorp.css"; // Ensure this path is correct

const GlobalCorp: React.FC = () => {
  return (
    <div className="GlobalCorp">
      {/* First Section with CSR Banner */}
      <div className="CSRBanner">
        <div className="CSRText">
          <span>
            At Implica Global Corporation, we believe in creating a future where businesses
            and communities grow together, fostering social and environmental progress. Our
            Corporate Social Responsibility (CSR) initiatives are rooted in our unwavering
            commitment to building a sustainable world, advancing social equity, and creating
            lasting value for the communities we serve.
            </span>
            <p>
            By integrating innovation and collaboration, we ensure our business practices contribute meaningfully to global goals, from education to environmental sustainability.
          </p>
        </div>
      </div>

      {/* Second Section with Commitment to Sustainable Development */}
      <div className="CommitmentSectionalfa">
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
            <p>
            Our approach is centered around creating long-term sustainable impact while contributing to the United Nations Sustainable Development Goals (SDGs).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalCorp;
