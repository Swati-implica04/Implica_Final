import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;  /* Allow wrapping */
  height: auto;     /* Automatically adjust height */
`;


const LeftSection = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 50px;
  display: flex;
  align-item: center;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 20px;
  line-weight: 58.55px;

  span {
    font-size: 48px;
    margin-right: 10px;
    color:#000000;
    line-height: 58.55px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 19.36px;
  max-width: 400px;
  color: #000000;
`;

const RightSection = styled.div`
  flex: 1;
  background-color: #d3d3d3;
`;

const HealthAndBiotech = () => {
  return (
    <Container>
      <LeftSection>
        <Heading>
          <span>1. Health & BioTech </span>
        </Heading>
        <Paragraph>
          We invest in pioneering companies that are advancing healthcare and
          biotechnology, from breakthrough therapies to cutting-edge
          diagnostics. Our focus is on supporting innovations & technology that
          improve health outcomes, extend life expectancy, and enhance the
          overall quality of life on a global scale.
        </Paragraph>
        <Heading>
          <span>2. Space & Deep Tech</span>
        </Heading>
        <Paragraph>
          We invest in pioneering companies that are advancing healthcare and
          biotechnology, from breakthrough therapies to cutting-edge
          diagnostics. Our focus is on supporting innovations & technology that
          improve health outcomes, extend life expectancy, and enhance the
          overall quality of life on a global scale.
        </Paragraph>
        <Heading>
          <span>3. Aviation & Mobility </span>
        </Heading>
        <Paragraph>
          We invest in pioneering companies that are advancing healthcare and
          biotechnology, from breakthrough therapies to cutting-edge
          diagnostics. Our focus is on supporting innovations & technology that
          improve health outcomes, extend life expectancy, and enhance the
          overall quality of life on a global scale.
        </Paragraph>
        <Heading>
          <span>4. Electric Vehicles (EV) </span>
        </Heading>
        <Paragraph>
          We invest in pioneering companies that are advancing healthcare and
          biotechnology, from breakthrough therapies to cutting-edge
          diagnostics. Our focus is on supporting innovations & technology that
          improve health outcomes, extend life expectancy, and enhance the
          overall quality of life on a global scale.
        </Paragraph>
      </LeftSection>
      <RightSection />
    </Container>
  );
};

export default HealthAndBiotech;
