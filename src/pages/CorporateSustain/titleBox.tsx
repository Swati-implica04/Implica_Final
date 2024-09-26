// TitleBox.tsx
import React from "react";
import styled from "styled-components";

interface TitleBoxProps {
  text: string;
  padding?: string;
  backgroundImage?: string; // Added prop for background image
}
const Box = styled.div<{ padding?: string; backgroundImage?: string }>`
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const BoxContainer = styled.div<{ padding?: string; }>`
  padding: ${({ padding }) => padding || "20px 40px"};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  width: 540px;
  height: 354px;
  background-color: rgba(255, 255, 255, 0.9); /* White background with slight opacity */
  color: #000000; /* Always black text */
  display: flex;
  align-items: flex-start; /* Align text to the start */
  justify-content: flex-start; /* Align text to the start */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const BoxText = styled.span`
  font-family: Houschka Pro, sans-serif; /* Fallback font added */
  font-size: 64px;
  font-weight: 500;
  line-height: 64px;
  text-align: left; /* Left-align the text */
  color: #000000; /* Always black text */
  position: relative; /* Ensure text is above background */
  z-index: 1;
`;

const TitleBox: React.FC<TitleBoxProps> = ({
  text,
  padding,
  backgroundImage,
}) => {
  return (
<Box padding={padding} backgroundImage={backgroundImage}>
    <BoxContainer padding={padding} >
      <BoxText>{text}</BoxText>
    </BoxContainer>
    </Box>
  );
};

export default TitleBox;
