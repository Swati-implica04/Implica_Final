import React from "react";
import "./DiversitySocial.css"; // Ensure the path to the CSS file is correct
import Footer from "../Footer";
import KeyAchievementsSection from "./KeyAchievementsSection";
import DiversityCmtmnt from "./DiversityCmtmnt";
import EqualitySection from "./EqualitySection";
import CreateImpact from "./CreateImpact";
import HorizontalCarousel from "./Carusel";
import img from "../../assets/images/pexels-tima-miroshnichenko-5685951.jpg";
import styled from "styled-components";
const images = [
  {
    src: img,
    alt: "Slide 1",
    caption: "Global Impact Program (GIP):",
    content: "Through GIP, we provide mentorship, skills development, and leadership training specifically designed to uplift women within our organization, empowering them to drive change both within Implica and in the broader business landscape.",
    subText: "",
  },
  {
    src: img,
    alt: "Slide 2",
    caption: " Carbon Neutrality by [Target Year] ",
    content: "We are on an ambitious journey toward achieving carbon neutrality across all of our operations by [target year]. This involves reducing greenhouse gas emissions, optimizing energy use, and investing in renewable energy sources like solar and wind power. ",
    subText: "Subtext for Slide 2",
  },
  {
    src: img,
    alt: "Slide 3",
    caption: "Yet Another Slide",
    content: "Content for Slide 3",
    subText: "Subtext for Slide 3",
  },
];
const DiversitySocial: React.FC = () => {
  return (
    <div>
        <div className="DiversitySocial">
            <div className="white-box">
                <span className="box_textStyle">
                Diversity, Equality and Inclusiveness
                </span>
            </div>
        </div>
        <DiversityCmtmnt/>
        <KeyAchievementsSection />
        <SectionContainer>
      <LeftContent>
        <Heading>Empowering Women in Leadership</Heading>
      </LeftContent>
      <RightContent>
     
        <Text>
          At <strong>our company</strong>, we know that gender diversity is key to creating a strong, resilient organization. 
          Through initiatives such as our GIP (Global Impact Program) and Leadership Development for Women, we are committed 
          to nurturing female talent and creating pathways for women to grow into leadership positions.
        </Text>
      </RightContent>
    </SectionContainer>
    <HorizontalCarousel images={images}/>

        <EqualitySection />
        <CreateImpact />
        <Footer />
    </div>
  );
};

export default DiversitySocial;
const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:rgba(18, 13, 23, 1); /* Dark background color */
  color: white; /* White text */
  padding: 50px;
  min-height: 50vh;
`;

const LeftContent = styled.div`
  flex: 1;
  padding-right: 100px;
`;

const Heading = styled.h1`
  font-family: Houschka Pro;
font-size: 48px;
font-weight: 500;
line-height: 48px;
text-align: left;

`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  text-align: left;
`;



const Text = styled.p`

  max-width: 500px;
  font-family: Work Sans;
font-size: 24px;
font-weight: 400;
line-height: 28.15px;
text-align: left;

`;
