import React from 'react';
import styled from 'styled-components';

import imgTab1 from "../../assets/images/diversity/drawing-women-looking-camera.jpg";
import imgTab2 from "../../assets/images/gay-with-rainbow-flags-sitting-street.jpg";
import imgTab3 from "../../assets/images/diversity/pexels-charles-parker-5845744.jpg";
import logoImplica from "../../assets/images/newlogo with short size.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  padding: 40px;
  background-color: #FFFFFF;
`;

const KeyInitiatives = styled.div`
  grid-column: 1 / 2;
  display: flex;
  align-items: center;
  font-size: 50px;
  font-weight: 500;
  color: #000000;
  padding-left: 5%;
`;

const KeyInitiativesText = styled.span`
  white-space: nowrap;
`;

const LogoImage = styled.img`
  height: 50px;
  margin-left: 20px;
  vertical-align: middle;
`;

const CardTextBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #FFFFFF;
  padding: 8px;
  color: #000000;
  width: 360px;
  height: 120px;
  transition: all 0.3s ease;
`;

const CardDescription = styled.div`
  position: absolute;
  bottom: 150px;
  left: 0;
  background-color: transparent;
  padding: 20px;
  color: #FFFFFF;
  width: 100%;
  font-size: 18px;
  text-align: left;
  opacity: 0;
  transition: all 0.3s ease;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 0 0;
  transition: all 0.3s ease;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: #FFFFFF;
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
  width: 480px;
  height: 480px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4b2c92;
  }

  &:hover ${CardImage} {
    opacity: 0;
  }

  &:hover ${CardTextBox} {
    background-color: #FFFFFF;
    color: #000000;
    position: absolute;
    top: 0px;
    left: 0px;
    width: auto;
    height: 120px;
    padding: 8px;
  }

  &:hover ${CardDescription} {
    opacity: 1;
    background-color: #4b2c92;
    color: #FFFFFF;
  }
`;

const CardText = styled.div`
  font-family: 'Houschka Pro', sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  text-align: left;
`;

const KeyInitiativesSection: React.FC = () => {
  return (
    <Container>
      <KeyInitiatives>
        <KeyInitiativesText>Key Initiatives of</KeyInitiativesText>
        <LogoImage src={logoImplica} alt="Implica Logo" />
      </KeyInitiatives>

      <Card>
        <CardImage src={imgTab1} alt="Employee Resource Groups" />
        <CardTextBox>
          <CardText>Employee Resource Groups (ERGs)</CardText>
        </CardTextBox>
        <CardDescription>
          We support various ERGs that provide a platform for employees with shared backgrounds and experiences to connect, collaborate, and advocate for diversity and inclusion across the company.
        </CardDescription>
      </Card>

      <Card>
        <CardImage src={imgTab2} alt="Inclusive Leadership Training" />
        <CardTextBox>
          <CardText>Inclusive Leadership Training</CardText>
        </CardTextBox>
        <CardDescription>
          All leaders at Implica undergo training to recognize unconscious bias and promote an inclusive mindset in every aspect of team management and decision-making.
        </CardDescription>
      </Card>

      <Card>
        <CardImage src={imgTab3} alt="Flexible Work Policies" />
        <CardTextBox>
          <CardText>Flexible Work Policies</CardText>
        </CardTextBox>
        <CardDescription>
          Our commitment to work-life balance includes flexible work arrangements, remote work options, and parental leave policies that support employees at all stages of life.
        </CardDescription>
      </Card>
    </Container>
  );
};

export default KeyInitiativesSection;
