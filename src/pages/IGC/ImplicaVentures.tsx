import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import Story from './OurStory';
import FocusAreas from './FocusArea';
import Programs from './Programs';

// Container for the entire layout
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 80px 0px 20px 80px;
  font-family: Arial, sans-serif;
  background-color: white; /* Set the background color to white */
`;

// Header section for the title and subtitle
const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

// Title style
const Title = styled.h1`
  background: linear-gradient(90deg, #AC4DCF 0%, #FF0095 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-family: var(--TypographyFontFamilyHeading-HouschkaRounded);
font-size: 64px;
font-weight: 500;
line-height: 64px;
text-align: left;

`;

// Subtitle style
const Subtitle = styled.h2`
  color:rgba(0, 0, 0, 1);
  margin: 10px 0;
  font-family: var(--TypographyFontFamilyHeading-HouschkaRounded);
font-size: 64px;
font-weight: 500;
line-height: 64px;
text-align: left;

`;

// Image placeholder (grey box)
const ImagePlaceholder = styled.div`
  width: 800px;
  height: 600px;
  background-color: #ccc; /* Grey background */
  margin-bottom: 40px;
`;

// Footer section for the paragraph text
const Foot = styled.div`
  background-color: #0b0015;
  color: #fff;
  padding: 40px 20px;
  width: 100%;
  text-align: center;
`;

// Paragraph style
const Paragraph = styled.p`
color:rgba(255, 255, 255, 1);
  line-height: 1.8;
  margin: 0 0 10px;
  // font-family: Work Sans;
font-size: 20px;
font-weight: 400;
line-height: 23.46px;
text-align: left;

`;

// Highlighted link
const Highlight = styled.a`
  color: #a046a9; /* Purple color */
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const ImplicaVentures = () => {
  return (
    <div>
    <Container>
      {/* Header Section */}
      <Header>
        <Title>Implica Ventures</Title>
        <Subtitle>Fueling Innovation, leading passion</Subtitle>
      </Header>

      {/* Image Placeholder */}
      <ImagePlaceholder />

      {/* Footer Section */}

    </Container>
          <Foot>
          <Paragraph>
            At Implica Global Corporation, we believe that the most transformative ideas come from bold, innovative thinking.
            Implica Ventures is our dedicated division tasked with identifying, investing in, and accelerating startup projects 
            that have the potential to make a significant global impact.
          </Paragraph>
          <Paragraph>
            Our mission is to empower high-potential startups with the resources, mentorship, and opportunities they need to scale and 
            succeed on a global stage.
          </Paragraph>
          <Paragraph>
            Whether you're an entrepreneur with a groundbreaking idea or a startup poised for rapid growth, Implica Ventures offers a 
            world-class platform to drive your innovation forward.
          </Paragraph>
          <Paragraph>
            <Highlight href="#">Our mission is to identify, invest in, and initiate</Highlight>
          </Paragraph>
        </Foot>
        <Story/>
        <FocusAreas/>
        <Programs/>
        <Footer/>
      
        </div>
  );
};

export default ImplicaVentures;
