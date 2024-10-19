import React from "react";
import styled from "styled-components";
import techImage from "../../assets/images/services/business-people-office.jpg"; // Replace with your actual image path

const ServicesSection: React.FC = () => {
  const services = [
    "Tech Services",
    "Tech Services",
    "Tech Services",
    "Tech Services",
    
  ];

  return (
    <SectionContainer>
      <Header>Services, catered to your needs</Header>
      <LogoContainer>
        <LogoText>
          <PinkText>implica</PinkText> <GreenText> Digital</GreenText>
        </LogoText>
      </LogoContainer>
      <CardsContainer>
        {services.map((service, index) => (
          <Card key={index}>
            <ImageContainer>
              <ImageOverlay />
              <Oay></Oay>

              <ServiceTitle>{service}</ServiceTitle>
            </ImageContainer>
          </Card>
        ))}
      </CardsContainer>
      <LogoContainer>
        <LogoText>
          <PinkText>implica</PinkText> <GreenText> Consulting</GreenText>
        </LogoText>
      </LogoContainer>
      <CardsContainer>
        {services.map((service, index) => (
          <Card key={index}>
            <ImageContainer>
              <ImageOverlay />
              <Oay></Oay>

              <ServiceTitle>{service}</ServiceTitle>
            </ImageContainer>
          </Card>
        ))}
      </CardsContainer>
      <LogoContainer>
        <LogoText>
          <PinkText>implica</PinkText> <GreenText> A I</GreenText>
        </LogoText>
      </LogoContainer>
      <CardsContainer>
        {services.map((service, index) => (
          <Card key={index}>
            <ImageContainer>
              <ImageOverlay />
              <Oay></Oay>

              <ServiceTitle>{service}</ServiceTitle>
            </ImageContainer>
          </Card>
        ))}
      </CardsContainer>
    </SectionContainer>
  );
};

export default ServicesSection;

// Styled Components

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 30px 80px;
  background-color: white;
  max-width: 100vw;
  box-sizing: border-box;
`;
const Oay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(59, 4, 58, 0.8) 0%,
    rgba(59, 4, 58, 0) 100%
  );
  pointer-events: none;
`;
const Header = styled.h1`
  color: rgba(0, 0, 0, 1);
  margin-bottom: 20px;
  // font-family: var(--TypographyFontFamilyHeading-HouschkaRounded);
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  text-align: left;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin-bottom: 30px;
`;

const LogoText = styled.div`
  display: flex;
  align-items: start;
  padding-top:20px
`;

const PinkText = styled.span`
  background: linear-gradient(
    13.34deg,
    #7b0b98 12.78%,
    #610c9f 32.27%,
    #da0c81 53.53%,
    #e95793 75.68%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // font-family: Houschka Rounded;
  font-size: 42.25px;
  font-weight: 500;
  line-height: 42.25px;
  text-align: left;
`;

const GreenText = styled.span`
  background: linear-gradient(
    90.16deg,
    #24231f 8.86%,
    #e2e2d9 10.92%,
    #2a2a2a 31.12%,
    #ffffff 48.71%,
    #161616 60.24%,
    #161616 75.75%,
    #161616 97.94%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  text-align: left;
  // font-family: Houschka Rounded;
  font-size: 42.25px;
  font-weight: 500;
  line-height: 42.25px;
  text-align: left;
  margin-left:10px
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
`;

const Card = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent; /* Transparent border initially */
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; /* Transition for all effects */
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.05); /* Smooth scale effect */
    border-color: #7b2cbf; /* Purple border on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow effect */
    z-index: 2; /* Ensures the hovered card stays on top */
  }
`;
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ImageOverlay = styled.div`
  background-image: url(${techImage});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  filter: brightness(0.6);
`;

const ServiceTitle = styled.h3`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  // font-family: "Arial", sans-serif;
`;
