import React from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/images/CSR/growing-organic-ecological-plants-fields-background.jpg";

const DiversityCmtmntContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  width: 100%;
`;

const CSRBanner = styled.div`
  width: 100%;
  min-height: 220px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.6);
    z-index: -1;
  }
`;

const CSRText = styled.div`
  max-width: 1200px;
  padding: 20px;
  color: #000000;
  font-size: 24px;
  font-weight: 500;
  text-align: left;
  line-height: 28.15px;
  border-radius: 8px;
`;

const CommitmentSection = styled.div`
  width: 100%;
  background-color: #120d17;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 0;
`;

const CommitmentContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CommitmentTextLeft = styled.div`
  width: 48%;  /* Adjusting for 2 parts */
  font-size: 48px;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.2;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 32px;
    width: 100%;
  }
`;

const CommitmentTextRight = styled.div`
  width: 48%;  /* Adjusting for 2 parts */
  font-size: 24px;
  line-height: 1.4;
  font-weight: 400;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 16px;
    width: 100%;
  }
`;

const DiversityCmtmnt: React.FC = () => {
  return (
    <DiversityCmtmntContainer>
      <CSRBanner>
        <CSRText>
          <span>
            At Implica Global Corporation, we recognize that diversity, equality, and inclusion (DEI) are not just buzzwords—they are the foundation of innovation, creativity, and success. We believe that by embracing diverse perspectives, fostering a culture of inclusion, and ensuring equal opportunities for all, we can build a workforce that thrives and drives meaningful impact.
          </span>
          <p>
            With 58% women in our workforce, we are proud to champion gender equality and continue to uplift women through our leadership development programs and initiatives like GIP (Global Impact Program). Our commitment goes beyond representation; we are creating an environment where every employee, regardless of background, feels empowered to bring their full selves to work.
          </p>
        </CSRText>
      </CSRBanner>

      <CommitmentSection>
        <CommitmentContent>
          {/* Left Side Text */}
          <CommitmentTextLeft>
            Our Commitment to Diversity 
          </CommitmentTextLeft>

          {/* Right Side Text */}
          <CommitmentTextRight>
          Implica Global Corporation is dedicated to building a diverse workforce that reflects the global communities we serve. We recognize the strength that comes from varied experiences, cultures, and perspectives. Our diversity efforts span across gender, race, ethnicity, age, sexual orientation, disability, and more. 
          </CommitmentTextRight>
        </CommitmentContent>
      </CommitmentSection>
    </DiversityCmtmntContainer>
  );
};

export default DiversityCmtmnt;
