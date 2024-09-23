// Programs.tsx
import React from "react";
import styled from "styled-components";
import worldMap from '../../assets/images/world_map_night.jpg'; // Importing the image

const ProgramsContainer = styled.div`
  background-color: white;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  align-items: center;
  padding: 50px 50px 0px 50px;
`;

const Title = styled.h1`
  flex: 1;
  color: rgba(0, 0, 0, 1);
  font-family: Work Sans;
  font-size: 48px;
  font-weight: 400;
  line-height: 56.3px;
  text-align: center;
`;

const Description = styled.p`
  flex: 1;
  font-family: Work Sans;
  font-size: 24px;
  font-weight: 400;
  line-height: 28.15px;
  text-align: left;
  color: rgba(0, 0, 0, 1);
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  //   gap: 20px;
`;

const ProgramCard = styled.div<{ dark?: boolean }>`
  background-color: ${(props) =>
    props.dark ? "#090015" : "#D3D3D3"}; /* Dark or Light background */
  color: ${(props) => (props.dark ? "white" : "black")};
  //   width: 400px;
  padding: 40px;
  //   border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
`;

const CardTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const CardList = styled.ul`
  font-size: 1rem;
  margin-top: 20px;
  line-height: 1.6;

  li {
    margin-bottom: 10px;
  }
`;

const Button = styled.button<{ dark?: boolean }>`
  background-color: ${(props) => (props.dark ? "#FFFFFF" : "#000000")};
  color: ${(props) => (props.dark ? "#000000" : "#FFFFFF")};
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;
  align-self: start;
`;

const Programs = () => {
  return (
    <div>
    <ProgramsContainer>
      <HeaderWrapper>
        <Title>Our Programs</Title>
        <Description>
          At Implica Ventures, we recognize that innovation requires more than
          just funding, it needs the right environment to thrive. To support
          startups at different stages of their journey, we run two core
          programs under our Implica Ventures division: the Accelerator Program
          and the Implica Innovation Hubs.
        </Description>
      </HeaderWrapper>

      <CardsWrapper>
        <ProgramCard>
          <div>
            <CardTitle>Implica Accelerator Program 2025</CardTitle>
            <CardText>
              Our Accelerator Program is designed for early-stage startups ready
              to scale their operations and reach global markets. The program
              provides startups with the funding, mentorship, and industry
              connections they need to grow rapidly and sustainably.
            </CardText>
            <CardList>
              <li>
                • Seed Funding: Access to capital to accelerate your startup’s
                growth.
              </li>
              <li>
                • Mentorship: Guidance from seasoned industry professionals and
                successful entrepreneurs.
              </li>
              <li>
                • Global Network: Tap into our network of investors, partners,
                and business leaders to expand your reach.
              </li>
              <li>
                • Market Expansion Strategy: Strategic support to help you break
                into global markets and scale efficiently.
              </li>
            </CardList>
          </div>
          <Button>Apply Now</Button>
        </ProgramCard>

        <ProgramCard dark>
          <div>
            <CardTitle>Implica Accelerator Program 2025</CardTitle>
            <CardText>
              Our Accelerator Program is designed for early-stage startups ready
              to scale their operations and reach global markets. The program
              provides startups with the funding, mentorship, and industry
              connections they need to grow rapidly and sustainably.
            </CardText>
            <CardList>
              <li>
                • Seed Funding: Access to capital to accelerate your startup’s
                growth.
              </li>
              <li>
                • Mentorship: Guidance from seasoned industry professionals and
                successful entrepreneurs.
              </li>
              <li>
                • Global Network: Tap into our network of investors, partners,
                and business leaders to expand your reach.
              </li>
              <li>
                • Market Expansion Strategy: Strategic support to help you break
                into global markets and scale efficiently.
              </li>
            </CardList>
          </div>
          <Button dark>Apply for Collaboration</Button>
        </ProgramCard>
      </CardsWrapper>
    </ProgramsContainer>
          <WhatWeDoSection>
          <WhatWeDoText>
            <WhatWeDoTitle>Success Stories</WhatWeDoTitle>
            <WhatWeDoDescription>
            In early March of 2024, Implica Ventures was launched as a  pilot project to explore the scale and impact of our startup accelerator initiatives. Through this initial phase, we successfully groomed and supported several high-potential startups, ultimately acquiring a few of them to drive diversification within Implica Global Corporation. These early successes have proven the strength of our model, reinforcing our commitment to nurturing innovation and fostering global growth. 
            </WhatWeDoDescription>
          </WhatWeDoText>
          <WorldMapImage />
        </WhatWeDoSection>
        </div>
  );
};

export default Programs;

const WhatWeDoSection = styled.section`
  display: flex;
  background-color: #1b0e36;
  color: white;
  padding: 3rem;
  align-items: center;
  height:610px
`;

const WhatWeDoText = styled.div`
  flex: 1;
  padding-right: 2rem;
  font-family: Houschka Rounded;
font-size: 48px;
font-weight: 500;
line-height: 40px;
text-align: left;

`;

const WhatWeDoTitle = styled.h2`
  margin-bottom: 1rem;
font-family: Houschka Rounded;
font-size: 48px;
font-weight: 500;
line-height: 40px;
text-align: left;

`;

const WhatWeDoDescription = styled.p`
    font-family: var(--TypographyFontFamilyBody-WorkSans);
font-size: 20px;
font-weight: 400;
line-height: 23.46px;
text-align: left;
`;

const WorldMapImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${worldMap}); /* Use the imported image */
  background-size: cover;
  height: 480px;
  width:640px
`;