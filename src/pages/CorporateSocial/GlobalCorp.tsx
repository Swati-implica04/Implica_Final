import React from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/images/CSR/growing-organic-ecological-plants-fields-background.jpg";

// Main container for the Corporate Social Responsibility section
const GlobalCorpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  width: 100%;
  // height: 100vh; /* Full viewport height */
  overflow: hidden;
`;

// Top section with background image, overlay, and text
const CSRBanner = styled.div`
  width: 100%;
  height: 220px; /* Ensure full viewport height */
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.6);
    z-index: 1;
  }
`;

const CSRText = styled.div`
  z-index: 2;
  max-width: 80%; /* Reduce width for smaller screens */
  color:rgba(0, 0, 0, 1);
  font-family: Work Sans;
font-size: 20px;
font-weight: 600;
line-height: 23.46px;
text-align: left;


  p {
font-size: 20px;
font-weight: 600;
line-height: 23.46px;
text-align: left;
  }

  @media (max-width: 768px) {
    font-size: 4vw;
    p {
      font-size: 3.5vw;
    }
  }

  @media (max-width: 480px) {
    font-size: 5vw;
    p {
      font-size: 4.5vw;
    }
  }
`;

// Second section with black background and text
const CommitmentSection = styled.div`
  width: 100%;
  background-color: #120d17;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
  height: 452px;

  @media (max-width: 768px) {
    padding: 16px 0;
  }
`;

const CommitmentContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CommitmentTextLeft = styled.div`
  max-width: 500px;
  color: #ffffff;
font-family: Houschka Rounded;
font-size: 48px;
font-weight: 500;
line-height: 48px;
text-align: left;

  @media (max-width: 768px) {
    font-size: 6vw;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 7vw;
  }
`;

const CommitmentTextRight = styled.div`
  max-width: 500px;
font-family: Work Sans;
font-size: 24px;
font-weight: 400;
line-height: 28.15px;
text-align: left;

  p {
    padding-top: 30px;
    color: #ffffff;
font-family: Work Sans;
font-size: 24px;
font-weight: 400;
line-height: 28.15px;
text-align: left;

    @media (max-width: 768px) {
      font-size: 3.5vw;
    }

    @media (max-width: 480px) {
      font-size: 4vw;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 3.5vw;
  }

  @media (max-width: 480px) {
    font-size: 4vw;
  }
`;

const GlobalCorp: React.FC = () => {
  return (
    <GlobalCorpContainer>
      {/* First Section with CSR Banner */}
      <CSRBanner>
        <CSRText>
          <span>
            At Implica Global Corporation, we believe in creating a future where businesses
            and communities grow together, fostering social and environmental progress. Our
            Corporate Social Responsibility (CSR) initiatives are rooted in our unwavering
            commitment to building a sustainable world, advancing social equity, and creating
            lasting value for the communities we serve.
          </span>
          <p>
            By integrating innovation and collaboration, we ensure our business practices
            contribute meaningfully to global goals, from education to environmental sustainability.
          </p>
        </CSRText>
      </CSRBanner>

      {/* Second Section with Commitment to Sustainable Development */}
      <CommitmentSection>
        <CommitmentContent>
          <CommitmentTextLeft>
            Our Commitment to Sustainable Development.
          </CommitmentTextLeft>
          <CommitmentTextRight>
            <span>
              As a global leader, Implica Global Corporation views CSR as an essential part of
              our identity. Through our comprehensive CSR programs, we address some of the
              world’s most pressing challenges, such as access to education, environmental
              conservation, and social inclusion.
            </span>
            <p>
              Our approach is centered around creating long-term sustainable impact while contributing
              to the United Nations Sustainable Development Goals (SDGs).
            </p>
          </CommitmentTextRight>
        </CommitmentContent>
      </CommitmentSection>
    </GlobalCorpContainer>
  );
};

export default GlobalCorp;
