import React from "react";
import "./CreateImpact.css"; // Ensure this path is correct
import childImg1 from "../../assets/images/pikaso_texttoimage_Poor-African-sad-little-girl-in-a-crop-field-her-f.jpeg";
import childImg2 from "../../assets/images/Poor Child both indian and afrian/pexels-krishna-sarode-264149680-13759377.jpg"
 
const CreateImpact: React.FC = () => {
  return (
    <div className="CreateImpact">
 
      {/* Second Section with Commitment to Sustainable Development */}
      <div className="CommitmentSectionnew">
        <div className="CommitmentContent">
          <div className="CommitmentTextLeft">
            Creating Impact Beyond the Workplace
          </div>
          <div className="CommitmentTextRight">
            <span>
              Our commitment to diversity, equality, and inclusion extends to the communities we serve. Through our partnerships with NGOs,
              educational institutions, and community organizations, we work to promote diversity and inclusion outside of the office.
              Initiatives such as STEM programs for girls, diversity scholarships, and community volunteering projects help us make a
              broader impact on society.
            </span>
          </div>
        </div>
 
        {/* Images Section */}
        <div className="ImagesSection">
          <div className="ImageWithText">
            <img
              src={childImg1}
              alt="Eco-friendly wind power project"
              className="HalfWidthImage"
            />
            <div className="WhiteBox">
              <span className="ImageText">STEM for Girls:</span>
            </div>
          </div>
 
          <div className="ImageWithText">
            <img
              src={childImg2}
              alt="Eco-friendly wind power project"
              className="HalfWidthImage"
            />
            <div className="WhiteBox">
              <span className="ImageText">STEM for Girls:</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default CreateImpact;