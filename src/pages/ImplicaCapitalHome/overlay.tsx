import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import airplane from "../../assets/images/Leonardo_Lightning_aeroplane_having_purple_neon_outlines_and_a_3.jpg";
import lap from "../../assets/images/laptop-with-futuristic-design-screen-glass-sphere-generative-ai_561855-22012-removebg-preview.png";
import map from "../../assets/images/world_map_night.jpg"
import tag from "../../assets/images/tagLine.jpg"
// Styled components
const BackgroundContainer = styled.div`
  background-color: white; /* White background */
  padding: 50px;
  position: relative;
  z-index: 0; /* Ensure container is behind other content */
  margin-bottom: 50px; /* Adds space between this and other components */
  display: flex;
  justify-content: center; /* Center content horizontally */
`;

const Container = styled.div`
  // font-family: Arial, sans-serif;
  text-align: left; /* Center align text */
`;

const Header = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  color: #f60294;
`;

const Logo = styled.p`
  //   margin-right: 10px;
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
  font-size: 67.6px;
  font-weight: 500;
  line-height: 67.6px;
  text-align: left;
`;

// Grid layout with overlapping images
const GridContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Overlapping image wrappers with fixed sizes
const ImageWrapper = styled(motion.div)<{ rect?: boolean }>`
background-color: black; /* Black background for the cards */
  position: absolute;
  width: ${(props) =>
    props.rect ? "400px" : "300px"}; /* Set 2 of them larger */
  height: ${(props) =>
    props.rect ? "250px" : "350px"}; /* Rectangular shape */
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover div {
    opacity: 1;
  }

  &:nth-child(1) {
    top: 80px;
    left: 170px;
    z-index: 3;
  }

  &:nth-child(2) {
    top: 20px;
    right: 200px;
    z-index: 2;
  }

  &:nth-child(3) {
    bottom: 30px;
    left: 270px;
    z-index: 1;
  }

  &:nth-child(4) {
    bottom: 30px;
    right: 80px;
    z-index: 4;
  }
`;

const TextOverlay = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  opacity: 1;
//   background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  transition: opacity 0.5s ease-in-out;
  // font-family: Impact;
font-size: 38px;
font-weight: 400;
line-height: 57.6px;
text-align: left;

`;

const images = [
  {
    src: lap,
    label: "SPACE & DEEPTECH",
  },
  {
    src: tag,
    label: "HEALTH & BIOTECH",
  },

  {
    src: map,
    label: "Automation",
  },
  {
    src: airplane,
    label: "AVIATION & MOBILITY",
  },
];

const AviationFocus = () => {
  return (
    <BackgroundContainer>
      <Container>
        <Header>
          <Logo>OUR FOCUS</Logo>
        </Header>

        {/* Grid for overlapping images */}
        <GridContainer>
          <ImageWrapper rect>
            <motion.img src={images[0].src} alt={images[0].label} />
            <TextOverlay>{images[0].label} →</TextOverlay>
          </ImageWrapper>

          <ImageWrapper>
            <motion.img src={images[1].src} alt={images[1].label} />
            <TextOverlay>{images[1].label} →</TextOverlay>
          </ImageWrapper>

          <ImageWrapper>
            <motion.img src={images[2].src} alt={images[2].label} />
            <TextOverlay>{images[2].label} →</TextOverlay>
          </ImageWrapper>

          <ImageWrapper rect>
            <motion.img src={images[3].src} alt={images[3].label} />
            <TextOverlay>{images[3].label} →</TextOverlay>
          </ImageWrapper>
        </GridContainer>
      </Container>
    </BackgroundContainer>
  );
};

export default AviationFocus;
