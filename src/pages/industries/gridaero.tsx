import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import airplaneImage1 from '../../assets/images/Leonardo_Lightning_aeroplane_having_purple_neon_outlines_and_a_3.jpg'; // Replace with your actual image path
import airplaneImage2 from '../../assets/images/world_map_night.jpg'; // Replace with another image path
import airplaneImage3 from '../../assets/images/laptop-with-futuristic-design-screen-glass-sphere-generative-ai_561855-22012-removebg-preview.png'; // Replace with another image path
 
// Wrapper for the whole section
const Container = styled.div<{ backgroundImage: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 100vh; */
  background-image: url(${(props) => props.backgroundImage}); /* Dynamic background image */
  background-size: cover;
  background-position: center;
  margin: 0;
  transition: background-image 1s ease-in-out; /* Smooth transition for background image change */
`;
 
// Styles for each card
const Card = styled.div`
  position: relative;
  width: 25%;
  height: 640px;
  border: 1px solid #fff;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;
 
  &:hover {
    /* transform: scale(.05);  Slight zoom on hover */
  }
 
  &:hover .overlay {
    opacity: 0.9;
    background-color: rgba(150, 150, 150, 0.7); /* Greyish overlay on hover */
  }
 
  &:hover .title {
    transform: translateY(-20px); /* Move the title up on hover */
  }
 
  &:hover .subtitle {
    opacity: 1; /* Show the subtitle on hover */
  }
`;
 
// Greyish overlay effect for hover
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent; /* Initially transparent */
  transition: background-color 0.4s ease-in-out;
`;
 
// Title that moves up on hover
const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: white;
  transition: transform 0.4s ease;
  text-align: center;
`;
 
// Subtitle that appears on hover
const Subtitle = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: white;
  opacity: 0; /* Initially hidden */
  transition: opacity 0.4s ease;
  text-align: center;
`;
 
// Card content wrapper at the bottom
const CardContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Stick to the bottom */
  align-items: center;
  text-align: center;
  height: 100%;
  color: white;
  background: rgba(0, 0, 0, 0.4); /* Add slight background at the bottom */
`;
 
const CardGrid = () => {
  // Array of background images
  const backgroundImages = [airplaneImage1, airplaneImage2, airplaneImage3];
 
  // State to hold the current background image index
  const [currentImage, setCurrentImage] = useState(0);
 
  useEffect(() => {
    // Function to change the background image every few seconds
    const imageChangeInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
 
    // Cleanup interval on component unmount
    return () => clearInterval(imageChangeInterval);
  }, [backgroundImages.length]);
 
  return (
    <Container backgroundImage={backgroundImages[currentImage]}>
      {[0, 1, 2, 3].map((index) => (
        <Card key={index}>
          <Overlay className="overlay" />
          <CardContent>
            <Title className="title">Lorem ipsum dolor sit amet</Title>
            <Subtitle className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Subtitle>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};
 
export default CardGrid;