import React from 'react';
import styled from 'styled-components';
// Import the background image
import cardImage from '../../assets/images/laptop-with-futuristic-design-screen-glass-sphere-generative-ai_561855-22012-removebg-preview.png'; // Replace with the correct path



// Main Container for Focus Areas
const FocusAreaContainer = styled.div`
  padding: 2rem 0rem 0.5rem 4rem;
  background-color: rgba(19, 2, 32, 1); /* Dark background */
  color: white;
  // font-family: Arial, sans-serif;
`;

// Title and Description Section
const FocusTitle = styled.h2`
  // font-family: Houschka Pro;
font-size: 48px;
font-weight: 500;
line-height: 48px;
text-align: left;

  margin-top: 1rem;
`;
const Wrap = styled.div`
  font-size: 2rem;
  display: grid;
    grid-template-columns: repeat(2, 1fr);
  margin-bottom: 1rem;
`;
const FocusDescription = styled.p`
  max-width: 480px;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

// Grid to display the cards
const FocusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 cards per row */
  }
`;

// Individual Focus Area Card
const FocusCard = styled.div`
  background-color: black; /* Black background for the cards */
  width: 480px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${cardImage}); /* Image background */
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Slight zoom on hover */
  }
`;

// White box inside the card for text
const FocusCardText = styled.div`
  background-color: white;
  color: black;
  padding: 1rem;
  border-radius: 4px;
  // font-family: Houschka Pro;
font-size: 48px;
font-weight: 500;
line-height: 48px;
text-align: left;

  display: inline-block; height:176px;width:360px
`;

// Arrow at the bottom right of the card
const Arrow = styled.span`
  font-size: 2rem;
  color: #ff00ff; /* Magenta arrow color */
  position: absolute;
  bottom: 50px;
  right: 45px;
`;

// React Component
const FocusAreas = () => {
  const focusData = [
    'Technology & Digital Transformation',
    'Sustainability & Green Innovations',
    'HealthCare & Biotechnology',
    'Artificial Intelligence & Machine Learning',
    'FinTech & Digital Finance',
  ];

  return (
    <FocusAreaContainer>
        <Wrap>   <FocusTitle>Focus Areas:</FocusTitle>
      <FocusDescription>
        Implica Ventures concentrates on high-growth sectors with the potential for significant global impact. 
        We actively pursue opportunities in:
      </FocusDescription></Wrap>
    

      <FocusGrid>
        {focusData.map((item, index) => (
          <FocusCard key={index}>
            <FocusCardText>{item}</FocusCardText>
            <Arrow>→</Arrow>
          </FocusCard>
        ))}
      </FocusGrid>
    </FocusAreaContainer>
  );
};

export default FocusAreas;
