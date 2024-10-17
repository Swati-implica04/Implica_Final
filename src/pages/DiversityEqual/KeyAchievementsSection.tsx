import React from 'react';
import styled from 'styled-components';

import imgTab1 from "../../assets/images/diversity/drawing-women-looking-camera.jpg";
import imgTab2 from "../../assets/images/consulting/lgbtq-pride-bracelet-with-fist-air.jpg";
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

const KeyAchievements = styled.div`
  grid-column: 1 / 2;
  display: flex;
  align-items: center;
  font-size: 50px;
  font-weight: 500;
  color: #000000;
  padding-left: 5%;
`;

const KeyAchievementsText = styled.span`
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
  height: 120px; /* Reduced height */
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

const KeyAchievementsSection: React.FC = () => {
  return (
    <Container>
      <KeyAchievements>
        <KeyAchievementsText>Key Achievements of</KeyAchievementsText>
        <LogoImage src={logoImplica} alt="Implica Logo" />
      </KeyAchievements>

      <Card>
        <CardImage src={imgTab1} alt="Women in Workforce" />
        <CardTextBox>
          <CardText>58% Women in Our Workforce</CardText>
        </CardTextBox>
        <CardDescription>
        We are proud to have women making up more than half of our workforce, contributing to leadership, innovation, and success across every level of the company. 
        </CardDescription>
      </Card>

      <Card>
        <CardImage src={imgTab2} alt="Inclusive Hiring" />
        <CardTextBox>
          <CardText>Inclusive Hiring Practices</CardText>
        </CardTextBox>
        <CardDescription>
        We actively recruit from a diverse pool of candidates, ensuring equal opportunities for underrepresented groups and promoting diversity at all levels. 
        </CardDescription>
      </Card>

      <Card>
        <CardImage src={imgTab3} alt="Diversity Councils" />
        <CardTextBox>
          <CardText>Global Diversity Councils</CardText>
        </CardTextBox>
        <CardDescription>
        Our regional and global diversity councils work to promote DEI initiatives, ensuring that our goals are embedded in our business strategies worldwide.
        </CardDescription>
      </Card>
    </Container>
  );
};

export default KeyAchievementsSection;
