import React from "react";
import styled from "styled-components";

const TextSection: React.FC = () => {
  return (
    <SectionContainer>
      <Heading>Lorem ipsum dolor sit amet,</Heading>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Description>
    </SectionContainer>
  );
};

export default TextSection;

// Styled Components

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  min-height: 30vh; /* Full height of the viewport */
  padding: 20px;
  padding-left: 80px;
  text-align: center;
  background-color: white; /* White background */
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  font-family: Houschka Rounded;
  font-size: 64px;
  color:rgba(0, 0, 0, 1);
  font-weight: 500;
  line-height: 40px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const Description = styled.p`
  max-width: 1200px;
  color:rgba(0, 0, 0, 1);
  font-family: var(--TypographyFontFamilyBody-WorkSans);
  font-size: 20px;
  font-weight: 400;
  line-height: 40px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 20px; /* Adds padding for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
