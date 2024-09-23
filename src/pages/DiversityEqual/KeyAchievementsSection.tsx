import React from 'react';
import styled from 'styled-components';

// Styled components
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
  font-size: 48px;
  font-weight: 500;
  align-self: center;
  color: #000000;
  padding-left: 18%;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #FFFFFF;
  padding: 0;  /* Remove padding for correct positioning */
  border-radius: 10px;
  overflow: hidden; /* Ensure that the content stays inside the card */
`;

const CardImage = styled.img`
  width: 480px;
  height: 480px;
  border-radius: 8px 8px 0 0; /* Rounded top corners only */
`;

const CardTextBox = styled.div`
  position: absolute;
    bottom: 0;
    left: 0;
    background-color: #FFFFFF;
    padding: 16px;
    margin-left: 17%;
    gap: 8px;
    color: #000000;
    width: 360px;
    height: 128px;
`;

const CardText = styled.div`
  font-family: Houschka Pro;
  font-size: 48px;
  font-weight: 500;
  line-height: 48px;
  text-align: left;
`;

import imgTab1 from "../../assets/images/diversity/drawing-women-looking-camera.jpg";
import imgTab2 from "../../assets/images/gay-with-rainbow-flags-sitting-street.jpg";
import imgTab3 from "../../assets/images/diversity/pexels-charles-parker-5845744.jpg";

const KeyAchievementsSection: React.FC = () => {
  return (
    <Container>
      <KeyAchievements>Key Achievements</KeyAchievements>

      <Card>
        <CardImage src={imgTab1} alt="Women in Workforce" />
        <CardTextBox>
          <CardText>58% Women in Our Workforce</CardText>
        </CardTextBox>
      </Card>

      <Card>
        <CardImage src={imgTab2} alt="Inclusive Hiring" />
        <CardTextBox>
          <CardText>Inclusive Hiring Practices</CardText>
        </CardTextBox>
      </Card>

      <Card>
        <CardImage src={imgTab3} alt="Diversity Councils" />
        <CardTextBox>
          <CardText>Global Diversity Councils</CardText>
        </CardTextBox>
      </Card>
    </Container>
  );
};

export default KeyAchievementsSection;
