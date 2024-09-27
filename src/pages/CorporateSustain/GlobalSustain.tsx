import React from "react";
import "./GlobalSustain.css"; // Ensure this path is correct

const GlobalSustain: React.FC = () => {
  return (
    <div className="GlobalSustain">
      {/* First Section with CSR Banner */}
      <div className="CSRBanner">
        <div className="CSRText">
          <span>
          At Implica Global Corporation, sustainability is a fundamental part of our business DNA. We are committed to embedding sustainable practices across all our operations, ensuring that every step we take toward innovation is aligned with protecting the planet and fostering social progress. We believe that true business success is measured by the positive impact we have on the environment, the communities we serve, and the global economy. 
</span>
<p>
Through a combination of cutting-edge technologies, innovative thinking, and responsible leadership, we aim to drive transformative change. Sustainability is not just an initiative at Implica—it is our commitment to creating a better future for all. 
          </p>
        </div>
      </div>

      {/* Second Section with Commitment to Sustainable Development */}
      <div className="CommitmentSection">
        <div className="CommitmentContent">
          <div className="CommitmentTextLef">
            Our Sustainability Vision: Transforming Tomorrow Today
          </div>
          <div className="CommitmentTextRigh">
            Our sustainability strategy is focused on three pillars-Enviroment Stewardship, Social Impact, and Governance Excellence. These 
            pillars guide our long-term vision to lead in responsible business practices, foster equitable opportunities, and address some
            of the most pressing global challenges, including climate change, resource depletion, and social inequity.
            <p style={{marginTop:'20px'}}>
            We are proud to align our sustainability initiatives with the United Nations Sustainable Development Goals (SDGs), ensuring that every action we take contributes to a global effort to create a sustainable future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSustain;
