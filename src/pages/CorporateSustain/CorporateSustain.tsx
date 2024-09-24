import React from "react";
import "./CorporateSustain.css"; // Ensure the path to the CSS file is correct
import Footer from "../Footer";
import GlobalSustain from "./GlobalSustain"
import SustainableFuture from "./SustainableFuture";
import TitleBox from "./titleBox";
import backgroundImage from "../../assets/images/Leonardo_Lightning_partnership_handshake_0.jpg";
import HorizontalCarousel from "../DiversityEqual/Carusel";
import img from "../../assets/images/CSR/growing-organic-ecological-plants-fields-background.jpg";
import styled from "styled-components";
const images = [
  {
    src: img,
    alt: "Slide 1",
    caption: "Global Internship Program (GIP):",
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
const CorporateSustain: React.FC = () => {
  return (
    <div>
  <div className="CorporateSustain">
      <TitleBox
        text="Pioneering a Greener, More Equitable Future"
        padding="80px 0px 0px 0px"
        backgroundImage={backgroundImage} // Pass the image prop
      />
    </div>

        <GlobalSustain />
        <SectionContainer>
      <LeftContent>
        <Heading>Empowering Women in Leadership</Heading>
      </LeftContent>
      <RightContent>
     
        <Text>
        At Implica, we are deeply committed to minimizing our environmental footprint and promoting a circular economy. By investing in clean energy, reducing our resource consumption, and preserving natural ecosystems, we are paving the way for a greener, more resilient planet.
      
        </Text>
      </RightContent>
    </SectionContainer>
    <HorizontalCarousel images={images} />
        <SustainableFuture />
        <Footer />
    </div>
  );
};

export default CorporateSustain;
const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:white; /* Dark background color */
  color: black; /* White text */
  padding: 50px;
  min-height: 50vh;
`;

const LeftContent = styled.div`
  flex: 1;
  padding-right: 100px;
  width:480px
`;

const Heading = styled.h1`
  font-family: Houschka Pro;
font-size: 48px;
font-weight: 500;
line-height: 48px;
text-align: left;
color:rgb(0,0,0,1)

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
color:rgb(0,0,0,1)

`;
