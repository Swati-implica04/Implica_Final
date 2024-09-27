import React from "react";
import "./DiversityCmtmnt.css"; // Ensure this path is correct

const DiversityCmtmnt: React.FC = () => {
  return (
    <div className="DiversityCmtmnt">
      {/* First Section with CSR Banner */}
      <div className="CSRBanner">
        <div className="CSRText">
          <span>
            At Implica Global Corporation, we recognize that diversity,
            equality, and inclusion (DEI) are not just buzzwords—they are the
            foundation of innovation, creativity, and success. We believe that
            by embracing diverse perspectives, fostering a culture of inclusion,
            and ensuring equal opportunities for all, we can build a workforce
            that thrives and drives meaningful impact.
          </span>
          <p>
            With 58% women in our workforce, we are proud to champion gender
            equality and continue to uplift women through our leadership
            development programs and initiatives like GIP (Global Impact
            Program). Our commitment goes beyond representation; we are creating
            an environment where every employee, regardless of background, feels
            empowered to bring their full selves to work.
          </p>
        </div>
      </div>

      {/* Second Section with Commitment to Sustainable Development */}
      <div className="CommitmentSection">
        <div className="CommitmentContent">
          <div className="CommitmentTextLeft">
          Our Commitment to Diversity 
          </div>
          <div className="CommitmentTextRight">
            <span>
            Implica Global Corporation is dedicated to building a diverse workforce that reflects the global communities we serve. We recognize the strength that comes from varied experiences, cultures, and perspectives. Our diversity efforts span across gender, race, ethnicity, age, sexual orientation, disability, and more. 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiversityCmtmnt;
