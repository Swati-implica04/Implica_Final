import React from "react";
import "./GlobalSustain.css"; // Ensure this path is correct

const GlobalSustain: React.FC = () => {
  return (
    <div className="GlobalSustain">
      {/* First Section with CSR Banner */}
      <div className="CSRBanner">
        <div className="CSRText">
          <span>
            At Implica Global Corporation, Sustainability is a fundamental part of our business DNA. We are commited to embedding sustainable
            practice scross all our operations, ensuring that every step we take toward innovation is aligned with protecting the planet and fostering
            social oprogress. We believe taht true business success is measured by the positive impact we have on the enviroment, the communities we serve, and the global economy.
          </span>
        </div>
      </div>

      {/* Second Section with Commitment to Sustainable Development */}
      <div className="CommitmentSection">
        <div className="CommitmentContent">
          <div className="CommitmentTextLeft">
            Our Sustainability Vision: Transforming Tomorrow Today
          </div>
          <div className="CommitmentTextRight">
            Our sustainability strategy is focused on three pillars-Enviroment Stewardship, Social Impact, and Governance Excellence. These 
            pillars guide our long-term vision to lead in responsible business practices, foster equitable opportunities, and address some
            of the most pressing global challenges, including climate change, resource depletion, and social inequity.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSustain;
