import React from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/images/CSR/growing-organic-ecological-plants-fields-background.jpg";

// Main container for Global Sustainability
const GlobalSustainContainer = styled.div`
  font-family: Arial, sans-serif;
`;

// Banner section
const CSRBanner = styled.div`
  width: 100%;
  min-height: 220px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.7); /* Adjust for readability */
    z-index: 1;
  }
`;

const CSRText = styled.div`
  z-index: 2;
  max-width: 1200px;
  color: #000000;
  font-size: 24px;
  font-weight: 500;
  text-align: left;
  line-height: 24.15px;
  padding: 20px;
  

  p {
    margin-top: 20px;
  }
`;

// Commitment Section
const CommitmentSection = styled.div`
  width: 100%;
  background-color: #120d17;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 20px;
  min-height: 300px;
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
  max-width: 600px;
  color: #ffffff;
  font-family: Houschka Pro;
  font-size: 48px;
  font-weight: 500;
  line-height: 48px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const CommitmentTextRight = styled.div`
  max-width: 500px;
  font-size: 20px;
  line-height: 23.46px;
  text-align: left;
  font-weight: 400;
  font-family: Work Sans;

  p {
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const GlobalSustain: React.FC = () => {
  return (
    <GlobalSustainContainer>
      {/* First Section with CSR Banner */}
      <CSRBanner>
        <CSRText>
          <span>
            At Implica Global Corporation, sustainability is a fundamental part
            of our business DNA. We are committed to embedding sustainable
            practices across all our operations, ensuring that every step we
            take toward innovation is aligned with protecting the planet and
            fostering social progress. We believe that true business success is
            measured by the positive impact we have on the environment, the
            communities we serve, and the global economy.
          </span>
          <p>
            Through a combination of cutting-edge technologies, innovative
            thinking, and responsible leadership, we aim to drive transformative
            change. Sustainability is not just an initiative at Implica—it is
            our commitment to creating a better future for all.
          </p>
        </CSRText>
      </CSRBanner>

      {/* Second Section with Commitment to Sustainable Development */}
      <CommitmentSection>
        <CommitmentContent>
          <CommitmentTextLeft>
            Our Sustainability Vision: Transforming Tomorrow Today
          </CommitmentTextLeft>
          <CommitmentTextRight>
            Our sustainability strategy is focused on three pillars: Environment
            Stewardship, Social Impact, and Governance Excellence. These pillars
            guide our long-term vision to lead in responsible business
            practices, foster equitable opportunities, and address some of the
            most pressing global challenges, including climate change, resource
            depletion, and social inequity.
            <p>
              We are proud to align our sustainability initiatives with the
              United Nations Sustainable Development Goals (SDGs), ensuring that
              every action we take contributes to a global effort to create a
              sustainable future.
            </p>
          </CommitmentTextRight>
        </CommitmentContent>
      </CommitmentSection>
    </GlobalSustainContainer>
  );
};

export default GlobalSustain;
