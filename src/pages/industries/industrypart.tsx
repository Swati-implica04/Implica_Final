import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(12, 11, 17, 1); /* Background color matching the image */
  padding: 40px;
  justify-content: space-between;
  align-items: center;
  color: white;
  // font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: normal;
  flex: 1;
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 2;
  padding: 30px 0;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  font-family: var(--TypographyFontFamilyBody-WorkSans);
font-size: 24px;
font-weight: 500;
line-height: 28.15px;
text-align: left;

`;

const Arrow = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  font-size: 20px;

`;

const Aviation = () => {
  return (
    <Container>
      <Title>How We are Helping in Aviation sector</Title>
      <StepContainer>
        <Step>
          Stopover MRO
          <Arrow>→</Arrow>
        </Step>
        <Step>
          Redirect to Specific Page
          <Arrow>→</Arrow>
        </Step>
        <Step>
          Redirect to Specific Page
          <Arrow>→</Arrow>
        </Step>
        <Step>
          Redirect to Specific Page
          <Arrow>→</Arrow>
        </Step>
    
      </StepContainer>
    </Container>
  );
};

export default Aviation;
