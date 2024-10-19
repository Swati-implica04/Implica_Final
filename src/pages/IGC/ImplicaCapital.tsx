import React from "react";
import styled from "styled-components";
import img from "../../assets/images/consulting/imgy.jpg";
import img1 from "../../assets/images/consulting/person-working-html-computer-2.jpg";
import img2 from "../../assets/images/consulting/person-working-html-computer.jpg";
import img3 from "../../assets/images/consulting/businessman-using-tablet-with-network-icons.jpg";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding-top: 60px; /* Adjust this value based on the height of your navbar */
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: black;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItemsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 10px;
  }
`;

const NavItem = styled.a`
  color: white;
  font-size: 16px;
  margin-right: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const ContactButton = styled.button`
  background-color: #2c003b;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 100px 50px;
  background: linear-gradient(to right, black, #2c003b);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px 20px;
  }
`;

const TextContainer = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    text-align: center;
    padding: 0;
  }
`;

const Heading = styled.h1`
  color: white;
  width: 580px;
  // font-family: Satoshi;
  font-size: 64px;
  font-weight: 400;
  line-height: 64px;
  text-align: left;
  padding-left: 100px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 48px;
    line-height: 48px;
    padding-left: 0;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const PlaceholderImage = styled.div<{ backgroundImage: string }>`
  width: 480px;
  height: 480px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Div = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(87, 5, 52, 1);
  border-radius: 10px;
  padding: 50px 50px 0px 50px;
  margin: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 20px;
    margin: 20px 0;
  }
`;

const Text = styled.div`
  width: 100%;
  // font-family: Source Code Pro;
  font-size: 28px;
  font-weight: 400;
  line-height: 30.17px;
  text-align: center;
  align-items: center;
  height: 248px;
  padding-top: 100px;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    padding-top: 50px;
  }
`;

const TextH1 = styled.div`
  // font-family: Satoshi;
  font-size: 48px;
  font-weight: 400;
  line-height: 72px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 48px;
    text-align: center;
  }
`;

const TextH2 = styled.div`
  // font-family: Satoshi;
  font-size: 48px;
  font-weight: 400;
  line-height: 48px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }
`;

const TextH3 = styled.div`
  // font-family: Source Code Pro;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.11px;
  text-align: center;
  height: 148px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const ImplicaCapital = () => {
  return (
    <MainContainer>
      <Nav>
        <NavItemsContainer>
          <NavItem>Why us</NavItem>
          <NavItem>Partner</NavItem>
        </NavItemsContainer>
        <ContactButton>Contact Us</ContactButton>
      </Nav>
      <Hero>
        <TextContainer>
          <Heading>The First and Leading Company in Global AI Services</Heading>
        </TextContainer>
        <ImageContainer>
          <PlaceholderImage backgroundImage={img} />
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
          <ImagePlaceholder backgroundImage={img2} />
        </Div>
        <Div>
          <ImagePlaceholder backgroundImage={img3} />
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
          <ImagePlaceholder backgroundImage={img1} />
        </Div>
        <TextH2>Partner with Implica A.I. and Lead the AI Revolution</TextH2>
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

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const TextBlock = styled.div`
  color: white;
  max-width: 500px;
  // font-family: Source Code Pro;
  font-size: 24px;
  font-weight: 400;
  line-height: 20.11px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 20px;
  }
`;

const ApproachSection = styled.div`
  align-items: center;
  padding-left: 6rem;
  padding-right: 6rem;
  background: linear-gradient(180deg, #121212 0%, #590657 100%);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`;

const ApproachSection2 = styled.div`
  align-items: center;
  padding-top: 6rem;
  padding-left: 8rem;
  padding-right: 6rem;
  background: linear-gradient(180deg, #590657 0%, #121212 100%);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`;

const ImagePlaceholder = styled.div<{ backgroundImage: string }>`
  width: 600px;
  height: 480px;
  gap: 0px;
  border-radius: 16px 0px 16px 0px;
  opacity: 0px;
  margin-bottom: 30px;
  border-radius: 10px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
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
  background-color: #ddd;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-left: 0;
    margin-bottom: 1.5rem;
  }
`;

const ApproachText = styled.p`
  font-size: 1.2rem;
  color: #fff;
  max-width: 600px;
  margin-left: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 1rem;
    line-height: 1.4;
  }
`;