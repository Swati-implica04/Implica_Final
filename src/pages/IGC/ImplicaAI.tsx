import React, { useState } from "react";
import styled from "styled-components";
import HeroImage from "../../assets/images/consulting/businessman-using-tablet-with-network-icons.jpg"; // Path to your image
import Footer from "../Footer";
import img from "../../assets/images/consulting/hologram-projector-screen-with-cloud-system-technology.jpg"
// Digital Component
const Container = styled.div`
  display: flex;
  padding: 50px;
  justify-content: space-between;
  align-items: flex-start;
  background-color: white; /* White background */
  color: black; /* Black text */
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
  color: black; /* Ensure text color is black */

  &:hover {
    color: #522b59; /* Purple for hover */
  }
`;

const ServiceDescription = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #333; /* Darker grey for description */
  line-height: 1.5;
  max-width: 90%;
`;

// Right section (Details and Image placeholder)
const DetailsContainer = styled.div<{ backgroundImage: string }>`
  width: 50%;
  height: 400px; // Adjust based on the content
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin-top:200px;
  color: black; 
    background-size: cover;
  background-position: center;
    background-image: url(${(props) => props.backgroundImage});
`;
const serviceData = [
  {
    title: "Artificial Intelligence",
    description: `At Implica Digital, our Artificial Intelligence (AI) services empower businesses 
      to harness the full potential of AI technologies. By integrating AI into your operations, 
      we help you streamline processes, enhance decision-making, and drive innovation. 
      From predictive analytics to automation, our AI solutions are designed to optimize 
      efficiency and unlock new growth opportunities across industries.`,
  },
  {
    title: "Cloud Services",
    description: `Cloud Computing is the backbone of modern digital transformation. Implica Digital 
      provides cloud solutions that improve scalability, flexibility, and efficiency, ensuring that 
      your organization can rapidly adapt to changing business needs.`,
  },
  {
    title: "Cybersecurity",
    description: `In an age of increasing cyber threats, safeguarding your data and systems is critical. 
      Our Cybersecurity services provide end-to-end protection against cyberattacks, ensuring that your 
      digital infrastructure is secure, compliant, and resilient.`,
  },
  {
    title: "Data and Analytics",
    description: `Data is one of your most valuable assets. Our Data & Analytics services help you 
      transform raw data into actionable insights, empowering you to make smarter decisions and 
      gain a competitive edge.`,
  },
  {
    title: "Enterprise Solutions",
    description: `Transform the way you do business with customized Enterprise Solutions that streamline 
      operations, improve efficiency, and drive growth. We implement and support enterprise software 
      solutions tailored to meet the needs of your organization.`,
  },
  {
    title: "IoT and Digital",
    description: `The Internet of Things (IoT) is transforming industries by connecting devices, systems, 
      and people. Implica Digital helps you develop and implement IoT solutions that drive operational 
      efficiency, improve customer experiences, and enable data-driven insights.`,
  },
  {
    title: "Quality Assurance",
    description: `In the fast-paced world of digital transformation, ensuring that your applications and 
      systems are working flawlessly is crucial. Our Quality Assurance (QA) services help you maintain 
      high performance and reliability across all your software and IT infrastructure.`,
  },
  {
    title: "Managed Applications Support",
    description: `Managing and maintaining your applications is essential to ensuring their performance, 
      security, and uptime. Our Managed Applications Support services provide comprehensive support 
      for your critical business applications, enabling you to focus on growth.`,
  },
  {
    title: "Managed Testing",
    description: `Testing is a vital part of software development and deployment. Our Managed Testing 
      services provide end-to-end testing solutions to ensure your applications are reliable, secure, 
      and high-performing before they go live.`,
  },
  {
    title: "IT Department Outsourcing",
    description: `Focus on your core business while we manage your IT infrastructure. Implica Digital 
      provides full or partial IT Department Outsourcing services, offering everything from day-to-day 
      IT management to specialized technical expertise, ensuring that your business runs smoothly 
      and efficiently.`,
  },
];

const Digital: React.FC = () => {
  const [selectedService, setSelectedService] = useState(0);
  return (
    <>
      <DigitalContainer>
        <HeroSection backgroundImage={HeroImage}>
          <HeroText>
            <Title>
              implica <span>Digital</span>
            </Title>
            <SubTitle>Your Partner in Digital Transformation</SubTitle>
          </HeroText>
        </HeroSection>

        <ContentSection>
          <ContentText>
            At Implica Digital, we harness the power of cutting-edge technology
            to transform businesses and drive digital innovation. In today's
            competitive landscape, leveraging technology is essential to stay
            ahead. Our Tech Services provide comprehensive solutions tailored to
            the specific needs of your organization, from artificial
            intelligence and cloud computing to managed applications and IT
            outsourcing.
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
        <DetailsContainer backgroundImage={img} >
          {/* Image Placeholder (could be a service-related image) */}
        </DetailsContainer>
      </Container>
      <SectionContainer>
        <WhyChooseContainer>
          <SectionTitle>
            Why Choose Implica Digital for Tech Services?
          </SectionTitle>

          <CardGrid>
            <Card>
              <CardTitle>End-to-End Digital Transformation</CardTitle>
              <CardContent>
                At Implica Digital, we provide holistic technology solutions
                that cover every aspect of your digital transformation journey,
                ensuring that your business is always at the cutting edge of
                technology.
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Tailored Solutions</CardTitle>
              <CardContent>
                We understand that every business is unique. Our services are
                customized to meet your specific needs, ensuring that the
                solutions we provide align with your goals and challenges.
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Global Expertise</CardTitle>
              <CardContent>
                With a global network of experts across industries, Implica
                Digital brings unparalleled knowledge and best practices to help
                your business succeed in today's complex digital landscape.
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Continuous Innovation</CardTitle>
              <CardContent>
                Technology is constantly evolving, and so are we. Our team stays
                ahead of the latest trends, ensuring that you benefit from the
                most advanced solutions available.
              </CardContent>
            </Card>
          </CardGrid>
        </WhyChooseContainer>

        <BottomSection backgroundImage={HeroImage}>
          <Overlay>
            <BottomTitle>
              Transform Your Business with Implica Digital
            </BottomTitle>
            <BottomContent>
              At Implica Digital, we help businesses harness the power of
              technology to achieve their goals, whether it’s through artificial
              intelligence, cloud services, or managed IT solutions. Our
              comprehensive tech services are designed to drive innovation,
              optimize operations, and secure your digital future.
            </BottomContent>
          </Overlay>
        </BottomSection>
      </SectionContainer>
      <Footer />
    </>
  );
};

export default Digital;

const DigitalContainer = styled.div`
  // font-family: Arial, sans-serif;
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
  font-size: 5rem;
  font-weight: bold;
  span {
    color: #f200c1;
  }
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
`;

// Content Section Styling
const ContentSection = styled.section`
  padding: 40px;
  background-color: #220839;
  color: white;
  text-align: center;
`;

const ContentText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;
const SectionContainer = styled.div`
  background: linear-gradient(180deg, #130220 0%, #3b043a 100%);
  color: white;
  // font-family: Arial, sans-serif;
`;

// Container for the Why Choose section
const WhyChooseContainer = styled.div`
  //   padding: 10px 10vw;
  text-align: center;
`;

// Section Title
const SectionTitle = styled.h2`
  margin-bottom: 50px;
  margin-top: 50px;
  color: #ffffff;
  // font-family: var(--TypographyFontFamilyHeading-HouschkaRounded);
  font-size: 46px;
  font-weight: 500;
  line-height: 52px;
  letter-spacing: -0.03em;
  text-align: left;
  margin-left: 60px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0px; /* Remove gap between cards */
  justify-content: center;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack cards on smaller screens */
    gap: 0px; /* Ensure no gap on smaller screens as well */
  }
`;

// Card component styling
const Card = styled.div`
  background: linear-gradient(180deg, #130220 0%, #3b043a 100%);
  padding: 30px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border: 1px solid white;
`;

// Card Title
const CardTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 20px;
  font-weight: bold;
`;

// Card Content
const CardContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #e0e0e0;
`;

// Bottom section
const BottomSection = styled.section<{ backgroundImage: string }>`
  margin-top: 20px;
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
  // font-family: var(--TypographyFontFamilyHeading-HouschkaRounded);
  font-size: 48px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.01em;
  text-align: left;
`;

// Bottom Content
const BottomContent = styled.p`
  // max-width: 800px;
  margin: 0 auto;
  color: white;
  font-family: var(--TypographyFontFamilyBody-WorkSans);
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.01em;
  text-align: left;
`;
