import React from "react";
import styled from "styled-components";
import industryImage from "../../assets/images/beautiful-city-landscape-with-tall-buildings.jpg"; // Replace this with the actual image path
import IndustryGrid from "./industriesGrid";
import Footer from "../Footer";
const IndustriesSection: React.FC = () => {
  return (
    <div>
      <SectionContainer>
        <ContentWrapper>
          <Title>Industries</Title>
          <Description>
            At Implica Global Corporation, we recognize that each industry
            presents unique challenges and opportunities. Our tailored approach
            leverages deep industry knowledge and cutting-edge technology to
            deliver customized strategies that foster growth, enhance
            efficiency, and maximize profitability. Serving a diverse range of
            clients, from startups to Fortune 500 companies, we provide
            unparalleled expertise and exceptional service.
          </Description>
        </ContentWrapper>
        <ImageWrapper>
          <Image src={industryImage} alt="Industries Background" />
        </ImageWrapper>
      </SectionContainer>
      <IndustryGrid />
      <Footer />
    </div>
  );
};

export default IndustriesSection;

// Styled Components
const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #121212;
  color: white;
  min-height: 100vh; /* Full height of the viewport */
  width: 100vw; /* Full width of the viewport */
  padding-top: 40px;
  box-sizing: border-box;
  overflow-x: hidden; /* Prevent horizontal overflow */
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin-bottom: 30px;
  padding: 0 20px; /* Prevent text from touching edges on small screens */
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  margin-top:30px;
  padding: 40px;
  text-align: center;
  font-family: var(--TypographyFontFamilyHeading-HouschkaRounded);
font-size: 64px;
font-weight: 600;
line-height: 52px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  margin: 0 auto;
  padding: 0 10px;
font-family: var(--TypefaceBody);
font-size: 24px;
font-weight: 500;
line-height: 30px;
text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ImageWrapper = styled.div`
  width: 100vw; /* Full width of the viewport */
  height: 60vh; /* Relative height for the image */
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    height: 50vh;
  }

  @media (max-width: 480px) {
    height: 40vh;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the container without distorting */
  position: absolute;
  top: 0;
  left: 0;
`;
