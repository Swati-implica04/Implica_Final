import React from "react";
import styled from "styled-components";
import TextSection from "./tesxt";
import ServicesSection from "./servicesindustry";
import Aviation from "./industrypart";
import Contact from "../Contact";
import FormDesign from "../FormDesign";
import airplaneImg from "../../assets/images/Leonardo_Lightning_aeroplane_having_purple_neon_outlines_and_a_3.jpg"; // Uncomment and replace with actual image path
import AviationFocus from "./industry";
import CardGrid from "./gridaero";
import Footer from "../Footer";

const AviationSection: React.FC = () => {
  return (
    <div>
      <SectionContainer>
        <ContentWrapper>
          <TextContent>
            <Title>Aviation</Title>
            <Description>
              At Implica Global, we’re at the forefront of aviation innovation.
              From streamlined operations to futuristic technologies, we aim to
              redefine air travel for the future. Whether it's commercial
              flights, cargo, or private jets, our expertise ensures efficiency
              and sustainability in the skies.
            </Description>
            <ContactButton href="/contact">Contact Us</ContactButton>
          </TextContent>

          <ImageContent>
            {/* Uncomment this line when the actual image path is available */}
            <AirplaneImage src={airplaneImg} alt="Aviation" />
            <PlaceholderImage />
          </ImageContent>
        </ContentWrapper>
      </SectionContainer>
      <TextSection />
      <CardGrid/>
      <ServicesSection />
      <Aviation />
      <AviationFocus/>
      <FormDesign />
<Footer/>
    </div>
  );
};

export default AviationSection;

// Styled Components
const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: rgba(10, 9, 16, 1);
  color: white;
  min-height: 80vh;
  width: 100vw;
  padding-top: 80px;
  box-sizing: border-box;
  overflow-x: hidden;
  @media (max-width: 768px) {
    height: auto; /* Allows content to expand naturally on small screens */
    padding: 40px 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap; /* Makes sure the content wraps for smaller screens */
`;

const TextContent = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 600px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-family: Houschka Rounded;
  font-size: 64px;
  font-weight: 500;
  line-height: 64px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  margin-bottom: 40px;
  max-width: 500px;
  line-height: 1.6;
  font-family: var(--TypographyFontFamilyBody-WorkSans);
  font-size: 20px;
  font-weight: 400;
  line-height: 40px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ContactButton = styled.a`
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
  font-family: Work Sans;
  font-size: 24px;
  font-weight: 500;
  line-height: 28.15px;
  text-align: left;

  &:hover {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  max-width: 600px;
  min-width: 300px;

  @media (max-width: 768px) {
    margin-top: 20px;
    max-width: 100%;
  }
`;

// Fallback placeholder if no image is provided
const PlaceholderImage = styled.div`
  width: 100%;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const AirplaneImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    height: auto;
  }
`;
