import React from "react";
import styled from "styled-components";
import grass_back from "../../assets/images/CSR/woman-office-working-environment-project.jpg";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 400px;
  background-color: #1a1a1a;
  color: #ffffff;
  box-sizing: border-box;
`;

const TextSection = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50%;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  max-width: 85%;
`;

const ImageSection = styled.div`
  flex: 1;
  max-width: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BannerContainer = styled.div<{ backgroundImage: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.backgroundImage}); /* Dynamically set the background image */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const BannerText = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  z-index: 1;
  margin: 0;
  padding: 0 20px;
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

// Component
const SustainableDesign: React.FC = () => {
  return (
    <div>
      <Container>
        {/* Left Text Section */}
        <TextSection>
          <Heading>Join Us in Creating a Sustainable Future</Heading>
          <Paragraph>
            At Implica Global Corporation, sustainability is a journey of continuous improvement. We invite you to join us on this journey—
            whether as a client, partner, or employee to help us create a future where businesses and communities thrive together in harmony with the environment.
          </Paragraph>
        </TextSection>

        {/* Right Image Section */}
        <ImageSection>
          <img
            src={grass_back} // Image imported and used here
            alt="Sustainability"
          />
        </ImageSection>
      </Container>

      {/* Banner Section */}
      <BannerContainer backgroundImage={grass_back}> {/* Pass the background image dynamically */}
        <BannerOverlay />
        <BannerText>
          Together, we can lead the way to a greener, more sustainable world.
        </BannerText>
      </BannerContainer>
    </div>
  );
};

export default SustainableDesign;
