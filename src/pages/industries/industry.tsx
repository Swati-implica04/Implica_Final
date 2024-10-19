import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import airplane from "../../assets/images/Leonardo_Lightning_aeroplane_having_purple_neon_outlines_and_a_3.jpg";
import tag from "../../assets/images/tagLine.jpg"
// Styled components
const Container = styled.div`
  background: white;
  padding: 50px;
  // font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  color: #f60294;
`;

const Logo = styled.p`
  margin-right: 10px;
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

const BrandName = styled.p`
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
  // font-family: Houschka Rounded;
font-size: 67.6px;
font-weight: 500;
line-height: 67.6px;
text-align: left;

`;

// Row container to hold two images per row
const RowContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

// Styled for large and small images
const LargeImageContainer = styled(motion.div)`
  flex: 2; // Large image takes more space
  padding: 5px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: flex-end;

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
`;

const SmallImageContainer = styled(motion.div)`
  flex: 1; // Small image takes less space
  padding: 5px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: flex-end;

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
`;

const TextOverlay = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 24px;
  opacity: 0; // Initially hidden
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  transition: opacity 0.5s ease-in-out;
`;

const images = [
  {
    src: airplane,
    label: "Internationalization",
  },
  {
    src: tag,
    label: "Automation",
  },
  {
    src: tag,
    label: "Automation",
  },
  {
    src: airplane,
    label: "Internationalization",
  },
];

const AviationFocus = () => {
  return (
    <Container>
      <Header>
        <Logo>implica</Logo>
        <BrandName>Focus</BrandName>
      </Header>

      {/* First Row */}
      <RowContainer>
        <LargeImageContainer>
          <motion.img src={images[0].src} alt={images[0].label} />
          <TextOverlay>{images[0].label} →</TextOverlay>
        </LargeImageContainer>

        <SmallImageContainer>
          <motion.img src={images[1].src} alt={images[1].label} />
          <TextOverlay>{images[1].label} →</TextOverlay>
        </SmallImageContainer>
      </RowContainer>

      {/* Second Row */}
      <RowContainer>
        <SmallImageContainer>
          <motion.img src={images[2].src} alt={images[2].label} />
          <TextOverlay>{images[2].label} →</TextOverlay>
        </SmallImageContainer>

        <LargeImageContainer>
          <motion.img src={images[3].src} alt={images[3].label} />
          <TextOverlay>{images[3].label} →</TextOverlay>
        </LargeImageContainer>
      </RowContainer>
    </Container>
  );
};

export default AviationFocus;
