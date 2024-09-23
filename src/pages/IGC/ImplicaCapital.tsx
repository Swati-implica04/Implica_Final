import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: black;
`;

const NavItem = styled.a`
  color: white;
  font-size: 16px;
  margin-right: 20px;
  cursor: pointer;
`;

const ContactButton = styled.button`
  background-color: #2c003b;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 100px 50px;
  background: linear-gradient(to right, black, #2c003b);
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Heading = styled.h1`
  color: white;
  font-size: 48px;
  line-height: 1.2;
`;

const SubText = styled.p`
  color: white;
  font-size: 16px;
  margin-top: 20px;
  max-width: 500px;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlaceholderImage = styled.div`
  width: 400px;
  height: 400px;
  background-color: gray;
`;
const Div = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(87, 5, 52, 1); /* Purple background */
  border-radius: 10px;
  padding: 50px 50px 0px 50px;
  margin: 50px;
`;

const Text = styled.div`
  width: 100%;
  font-family: Source Code Pro;
  font-size: 24px;
  font-weight: 400;
  line-height: 30.17px;
  text-align: center;
  align-items: center;
  height: 248px;
  padding-top: 100px;
`;
const TextH1 = styled.div`
  font-family: Satoshi;
  font-size: 48px;
  font-weight: 400;
  line-height: 72px;
  text-align: left;
`;
const TextH2 = styled.div`
  font-family: Satoshi;
  font-size: 48px;
  font-weight: 400;
  line-height: 48px;
  text-align: center;
`;
const TextH3 = styled.div`
  font-family: Source Code Pro;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.11px;
  text-align: center;
  height: 148px;
`;
const ImplicaCapital = () => {
  return (
    <MainContainer>
      <Nav>
        <NavItem>Why us</NavItem>
        <NavItem>Partner</NavItem>
        <ContactButton>Contact Us</ContactButton>
      </Nav>
      <Hero>
        <TextContainer>
          <Heading>The First and Leading Company in Global AI Services</Heading>
          <SubText>
            At Implica A.I., we are proud to be the pioneers in Artificial
            Intelligence solutions for businesses across the globe. As the first
            and leading company in AI services, we Identify, Integrate, and
            Initiate the Adaptation of AI into businesses globally.
          </SubText>
        </TextContainer>
        <ImageContainer>
          <PlaceholderImage />
        </ImageContainer>
      </Hero>
      <Text>
        At Implica A.I., we are proud to be the pioneers in Artificial
        Intelligence solutions for businesses across the globe. As the first and
        leading company in AI services, we Identify, Integrate, and Initiate the
        Adaptation of AI into businesses globally
      </Text>
      <MissionContainer>
        <TextBlock>
          Our mission is to empower organizations across industries by
          leveraging AI to drive innovation, optimize operations, and stay ahead
          in an increasingly competitive market.
        </TextBlock>
        <TextBlock>
          AI adoption and implementation for organizations in over 40
          industries, helping them unlock unprecedented levels of efficiency,
          innovation, and growth.
        </TextBlock>
      </MissionContainer>
      <ApproachSection>
        <Div>
          <ApproachText>
            <TextH1>Industry-Specific Expertise</TextH1>
            We understand the unique challenges and opportunities in each of the
            industries we serve. Our tailored approach ensures that AI solutions
            are optimized for the specific needs of your business, ensuring
            maximum impact and efficiency. 
          </ApproachText>
          <ImagePlaceholder />
        </Div>
        <Div>
          <ImagePlaceholder />
          <ApproachText>
            <TextH1>End-to-End Support</TextH1>
            From identifying AI opportunities to implementing and optimizing
            solutions, Implica A.I. provides end-to-end support to ensure that
            your organization can fully harness the potential of AI technology. 
          </ApproachText>
        </Div>
        <Div>
          <ApproachText>
            <TextH1>Custom AI Development</TextH1>
            For businesses with specific needs, Implica A.I. offers custom AI
            development services, creating bespoke tools and technologies
            designed to address your most complex challenges and position you as
            a leader in your industry. 
          </ApproachText>
          <ImagePlaceholder />
        </Div>
        <TextH2>Partner with Implica A.I. and Lead the AI Revolution </TextH2>
      </ApproachSection>
      <ApproachSection2>
        <ImagePlaceholder1 />

        <TextH3>
          In a world where technology is transforming industries at an
          unprecedented pace, AI is no longer a luxury—it’s a necessity. Implica
          A.I. helps businesses in over 40 industries leverage the power of AI
          to stay competitive, adapt to changing demands, and unlock new
          opportunities for growth. 
        </TextH3>
      </ApproachSection2>
    </MainContainer>
  );
};

export default ImplicaCapital;
const MissionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 50px 50px;
  background-color: black;
`;

const TextBlock = styled.div`
  color: white;
  max-width: 400px;
  font-family: Source Code Pro;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.11px;
  text-align: center;
`;
const ApproachSection = styled.div`
  align-items: center;
  padding-left: 6rem; /* Added padding */
  padding-right: 6rem; /* Added padding */
  background: linear-gradient(
    180deg,
    #121212 0%,
    #590657 100%
  ); /* Purple background */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
const ApproachSection2 = styled.div`
  align-items: center;
  padding-top: 6rem; /* Added padding */
  padding-left: 8rem; /* Added padding */
  padding-right: 6rem; /* Added padding */
  background: linear-gradient(180deg, #590657 0%, #121212 100%);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
const ImagePlaceholder = styled.div`
  width: 600px;
  height: 480px;
  gap: 0px;
  border-radius: 16px 0px 16px 0px;
  opacity: 0px;
  margin-bottom: 30px;
  background-color: #ddd; /* Placeholder color */
  border-radius: 10px;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;
const ImagePlaceholder1 = styled.div`
  width: 1152px;
  height: 460px;
  margin-left: 2rem;
  gap: 0px;
  border-radius: 16px 0px 16px 0px;
  opacity: 0px;
  margin-bottom: 30px;
  background-color: #ddd; /* Placeholder color */
  border-radius: 10px;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const ApproachText = styled.p`
  font-size: 1.2rem;
  color: #fff; /* White text for contrast */
  max-width: 600px;
  margin-left: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
