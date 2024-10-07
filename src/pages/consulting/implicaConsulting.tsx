import React, { useState } from "react";
import styled from "styled-components";
import HeroImage from "../../assets/images/laptop-with-futuristic-design-screen-glass-sphere-generative-ai_561855-22012-removebg-preview.png"; // Path to your image
import Footer from "../Footer";

import img1 from "../../assets/images/Consulting/pexels-vlada-karpovich-7433822.jpg";
import img2 from "../../assets/images/Consulting/pexels-yankrukov-7794005.jpg";
import img3 from "../../assets/images/Consulting/business-people-working-with-ipad-side-view.jpg"; 
import img4 from "../../assets/images/Consulting/coworkers-working-office-desk-with-tablet-papers-coffee.jpg";
import img5 from "../../assets/images/Consulting/modern-equipped-computer-lab.jpg";
// Digital Component
const Container = styled.div`
  display: flex;
  padding: 50px;
  justify-content: space-between;
  align-items: flex-start;
  background-color: rgba(19, 2, 32, 1); /* White background */
  color: white; /* Black text */
`;
 
const ServiceList = styled.div`
  width: 40%;
`;
 
const ServiceItem = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 15px 0;
  border-bottom: ${({ selected }) =>
    selected ? "2px solid pink" : "1px solid pink"};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  font-size: 1.2rem;
  color: white; /* Ensure text color is black */
 
  &:hover {
    color: #522b59; /* Purple for hover */
  }
`;
 
const ServiceDescription = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #white; /* Darker grey for description */
  line-height: 1.5;
  max-width: 90%;
`;
 
// Right section (Details and Image placeholder)
const DetailsContainer = styled.div`
  width: 50%;
  height: 400px; /* Adjust based on the content */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  background-image: url(${img2}); /* Adding img2 as the background image */
  background-size: cover; /* Ensures the image covers the section */
  background-position: center; /* Center the image */
`;
const serviceData = [
  {
    title: "Management Consulting",
    description: `Empowering leadership and transforming organizations for success.
      We help businesses drive performance, navigate change, and build resilient, future-ready teams.`,
  },
  {
    title: "Strategy Consulting",
    description: `Strategic clarity for sustainable growth. From corporate strategy to mergers
      and global expansion, we craft winning strategies that deliver competitive advantage.`,
  },
  {
    title: "Operational Consulting",
    description: `Optimize efficiency, reduce costs, and enhance productivity.
      Our operational expertise streamlines processes and drives agility across your business operations.`,
  },
  {
    title: "Marketing Consulting",
    description: `Innovative marketing strategies that build brand loyalty and accelerate growth.
      We help you understand your customers, personalize experiences, and engage across every channel.`,
  },
  {
    title: "Sustainability & Green Consulting",
    description: `Leading the way to a greener future. We design sustainability strategies
      that reduce carbon footprints, drive energy efficiency, and position businesses as leaders in ESG.`,
  },
  {
    title: "Innovation & R&D Consulting",
    description: `Fueling innovation and accelerating product development. We guide businesses
      through R&D strategies that bring groundbreaking ideas to the market faster.`,
  },
];
 
const Digital: React.FC = () => {
  const [selectedService, setSelectedService] = useState(0);
  const stats = [
    { title: "91% Client Satisfaction", description: "Delivering results that exceed expectations across industries." },
    { title: "Global Reach", description: "Operations in over 25 countries, serving clients worldwide." },
    { title: "40+ Industries Served", description: "Deep expertise across diverse sectors" },
    { title: "500+ Successful Projects", description: "Helping businesses achieve transformational outcomes" },
    { title: "75% Repeat Business", description: "Trusted by clients to deliver long-term value and sustainable growth." },
    { title: "$6 Billion in Client Value Created", description: "Driving measurable impact and business growth through strategic consulting." },
    { title: "100+ Expert Consultants", description: "A global network of industry leaders and specialists" }
  ]
  const handleScheduleCall = () => {
    // Add your logic here, e.g., navigating to a schedule page
    console.log('Schedule a Call clicked');
  };
 
  const handleSubmitRSVP = () => {
    // Add your logic here, e.g., showing an RSVP form
    console.log('Submit RSVP clicked');
  };
 
  const handleContactForm = () => {
    // Add your logic here, e.g., opening a contact form modal
    console.log('Contact Form clicked');
  };
  return (
    <>
      <DigitalContainer>
        <HeroSection backgroundImage={img1}>
          <HeroText>
          {/* <img src={implicaLogo} alt="Implica Logo"/> */}
            <Title>
              implica <span>Consulting</span>
            </Title>
            <SubTitle>Innovating Tomorrow, Transforming Today. </SubTitle>
          </HeroText>
        </HeroSection>
 
        <ContentSection>
          <ContentText>
            At Implica Consulting, we partner with organizations globally to
            navigate complexity, unlock potential, and drive sustainable
            success. With deep expertise across industries and markets, we help
            businesses overcome challenges and seize opportunities by delivering
            tailored solutions that transform strategies, optimize operations,
            and foster innovation globally.  
          </ContentText>
          <ContentText>
            Our approach combines strategic insight with operational excellence,
            ensuring that every engagement delivers measurable impact. Whether
            you’re aiming to redefine your corporate strategy, harness the power
            of digital, or embed sustainability into the core of your
            operations, Implica Consulting brings the expertise, experience, and
            execution capabilities to help you thrive. 
          </ContentText>
          <ContentText>
            Whether you’re pursuing growth, operational excellence, or
            sustainability, our team of expert consultants is here to guide you
            every step of the way. - should go on a video play text.  
          </ContentText>
        </ContentSection>
      </DigitalContainer>
      <Container>
        <ServiceList>
          <h2>Our Services</h2>
          {serviceData.map((service, index) => (
            <div key={index}>
              <ServiceItem
                selected={selectedService === index}
                onClick={() => setSelectedService(index)}
              >
                <span>{service.title}</span>
                <span>{selectedService === index ? "↓" : "→"}</span>
              </ServiceItem>
              {selectedService === index && (
                <ServiceDescription>{service.description}</ServiceDescription>
              )}
            </div>
          ))}
        </ServiceList>
 
        {/* Right Section - Details and Image */}
        <DetailsContainer>
          {/* Image Placeholder (could be a service-related image) */}
        </DetailsContainer>
      </Container>
      <HelpSectionWrapper>
        <HelpSectionTitle>How We Help</HelpSectionTitle>
        <HelpCardGrid>
          <HelpCard>
            <HelpCardContent>
              <HelpCardTitle>
                Crafting Winning Strategies for Growth
              </HelpCardTitle>
              <HelpCardDescription>
                In today's dynamic markets, a strong, future-focused strategy is
                the foundation of success. At Implica Consulting, we work
                alongside your leadership team to develop tailored strategies
                that position your business for growth, agility, and long-term
                success. From entering new markets to navigating complex
                competitive landscapes, we guide you through every step of your
                strategic journey.
              </HelpCardDescription>
            </HelpCardContent>
            <HelpCardImage aria-label="Strategy illustration"  backgroundImage={img4}  />
          </HelpCard>
          <ReverseHelpCard>
            <HelpCardContent>
              <HelpCardTitle>
                Optimizing Operations for Excellence
              </HelpCardTitle>
              <HelpCardDescription>
                Operational excellence is key to driving performance and
                maintaining a competitive edge. We work with organizations to
                optimize their processes, streamline workflows, and introduce
                lean and agile methodologies that enhance efficiency. From
                supply chain management to digital operations, we ensure your
                business operates at its best.
              </HelpCardDescription>
            </HelpCardContent>
            <HelpCardImage aria-label="Operations optimization illustration"  backgroundImage={img5}  />
          </ReverseHelpCard>
          <HelpCard>
            <HelpCardContent>
              <HelpCardTitle>
                Enhancing Customer Engagement and Marketing Impact 
              </HelpCardTitle>
              <HelpCardDescription>
                In today’s customer-centric world, businesses need to build
                meaningful connections with their audiences to drive growth and
                loyalty. Our marketing consulting services help you understand
                your customers, refine your brand, and develop data-driven
                strategies that maximize engagement and conversion across all
                channels. 
              </HelpCardDescription>
            </HelpCardContent>
            <HelpCardImage aria-label="Strategy illustration"  backgroundImage={img3} />
          </HelpCard>
        </HelpCardGrid>
      </HelpSectionWrapper>
      <PageContainer>
      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard key={index}>
            <StatTitle>{stat.title}</StatTitle>
            <StatDescription>{stat.description}</StatDescription>
          </StatCard>
        ))}
      </StatsGrid>
 
   
    </PageContainer>
    <BottomSection backgroundImage={HeroImage}>
  <Overlay>
    <BottomTitle>
      Ready to transform your business? Whether you’re looking to optimize operations, drive innovation, or craft a long-term strategy, Implica Consulting is here to help.
    </BottomTitle>
    <BottomContent onClick={() => handleScheduleCall()}>
      Schedule a Call
    </BottomContent>
    <BottomContent onClick={() => handleSubmitRSVP()}>
      Submit RSVP
    </BottomContent>
    <BottomContent onClick={() => handleContactForm()}>
      Contact Form
    </BottomContent>
  </Overlay>
</BottomSection>
      <Footer />
    </>
  );
};
 
export default Digital;
const BottomSection = styled.section<{ backgroundImage: string }>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 280px;
`;
 
// Overlay to darken background for better readability
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 50px 30px;
  width: 100%;
  text-align: center;
  height:285px
`;
 
// Bottom Title
const BottomTitle = styled.h2`
  margin-bottom: 20px;
  color: white;
  text-align: left;
  font-family: var(--TypographyFontFamilyBody-WorkSans);
font-size: 24px;
font-weight: 400;
line-height: 28.15px;
text-align: left;
 
`;
 
// Bottom Content
const BottomContent = styled.p`
//   max-width: 800px;
  color: white;
  font-family: var(--TypographyFontFamilyBody-WorkSans);
  letter-spacing: 0.01em;
font-size: 24px;
font-weight: 500;
line-height: 28.15px;
text-align: left;
 
`;
const DigitalContainer = styled.div`
  font-family: Arial, sans-serif;
`;
 
// Hero Section Styling with increased height and left-aligned content
const HeroSection = styled.section<{ backgroundImage: string }>`
  height: 100vh; /* Increased height */
  min-height: 700px; /* Ensures minimum height */
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover; /* Ensures the image covers the section */
  background-position: center;
  display: flex;
  justify-content: flex-start; /* Align content to the left */
  align-items: center;
  padding-left: 50px; /* Add padding to move text away from the edge */
`;
 
const HeroText = styled.div`
  text-align: left; /* Align text to the left */
  color: white;
`;
 
const Title = styled.h1`
  font-family: HP Simplified;
  font-size: 126.19px;
  font-weight: 300;
  line-height: 146.25px;
  text-align: left;
 
  span {
    color: #f200c1;
  }
`;
 
const SubTitle = styled.p`
  font-family: var(--TypographyFontFamilyHeading-HouschkaRounded);
  font-size: 29px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: -0.01em;
  text-align: left;
`;
 
// Content Section Styling
const ContentSection = styled.section`
  padding: 40px;
  background-color: #220839;
  color: white;
  text-align: center;
`;
 
const ContentText = styled.p`
  font-family: var(--TypographyFontFamilyBody-WorkSans);
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.01em;
  text-align: left;
`;
 
/////////////////////////
const HelpSectionWrapper = styled.section`
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
  background-color: white;
  color: black;
`;
 
const HelpSectionTitle = styled.h2`
  margin-bottom: 1.5rem;
  padding-left: 20px;
  color: black;
 
  //styleName: Displays/D4/D4-Medium;
  font-family: var(--TypographyFontFamilyHeading-HouschkaRounded);
  font-size: 46px;
  font-weight: 500;
  line-height: 52px;
  letter-spacing: -0.03em;
  text-align: left;
`;
 
const HelpCardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
 
const HelpCard = styled.div`
  border: 1px solid #8a2be2;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  height: 500px;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
 
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
 
const HelpCardContent = styled.div`
  padding-top: 100px;
  flex: 1;
`;
 
const HelpCardTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: black;
  font-family: var(--TypographyFontFamilyHeading-HouschkaRounded);
  font-size: 46px;
  font-weight: 500;
  line-height: 52px;
  letter-spacing: -0.03em;
  text-align: left;
`;
 
const HelpCardDescription = styled.p`
  color: black;
  //styleName: Body/B2/B2-Regular;
  font-family: var(--TypographyFontFamilyBody-WorkSans);
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.01em;
  text-align: left;
`;
 
const HelpCardImage = styled.div<{ backgroundImage: string }>`
  background-color: rgba(217, 217, 217, 1);
  width: 100%;
  max-width: 600px;
  height: 480px;
  flex: 1;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover; /* Ensures the image covers the section */
  background-position: center; /* Center the image */
 
  @media (min-width: 768px) {
    width: 200px;
    height: auto;
  }
`;
 
const ReverseHelpCard = styled(HelpCard)`
  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;
////
const PageContainer = styled.div`
  background-color: #1a0933;
  color: white;
  padding: 2rem;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center; /* Centers the content horizontally */
  align-items: center; /* Centers the content vertically */
  min-height: 100vh; /* Ensures full viewport height */
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Creates 3 equal columns */
  gap: 1rem;
  width: 100%;
  max-width: 1200px; /* Limits grid width */
  margin: 0 auto; /* Centers the grid horizontally */
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 column on smaller screens */
  }
`;

const StatCard = styled.div`
  background-color: white;
  color: black;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Centers the content inside the card */
  min-height: 150px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow */
`;

const StatTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-family: var(--TypographyFontFamilyHeading-HouschkaRounded);
  font-size: 26px;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: -0.01em;
  text-align: center;
`;

const StatDescription = styled.p`
  color: #555;
  font-family: var(--TypographyFontFamilyBody-WorkSans);
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.01em;
  text-align: center;
`;



