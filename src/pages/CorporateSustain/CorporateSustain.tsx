import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import GlobalSustain from "./GlobalSustain";
import SustainableFuture from "./SustainableFuture";
import backgroundImage from "../../assets/images/CSR/pexels-goumbik-653429.jpg";
import HorizontalCarousel from "../DiversityEqual/Carusel";
import img from "../../assets/images/CSR/view-green-forest-trees-with-co2.jpg";
import SustainabilityHeader from "./titleBox";
import img3 from "../../assets/images/CSR/planet-earth-surrounded-by-nature-vegetation.jpg"
import img2 from "../../assets/images/CSR/clean-energy-with-wind-power-plant.jpg";
import img1 from "../../assets/images/CSR/sustainable-development-goals-still-life.jpg"
const images = [
  {
    src: img,
    alt: "Slide 1",
    caption: "Carbon Neutrality by 2040 ",
    content:
      "We are on an ambitious journey toward achieving carbon neutrality across all of our operations by [target year]. This involves reducing greenhouse gas emissions, optimizing energy use, and investing in renewable energy sources like solar and wind power.",
    subText: "",
  },
  {
    src: img2,
    alt: "Slide 2",
    caption: "Renewable Energy Adoption ",
    content:
      "We are rapidly transitioning to 100% renewable energy across our global facilities. By integrating solar power, wind energy, and other clean technologies into our operations, we aim to reduce our dependency on fossil fuels and contribute to the global effort to mitigate climate change. ",
    subText: "Subtext for Slide 2",
  },
  {
    src: img1,
    alt: "Slide 3",
    caption: "Circular Economy Practices",
    content:
      "Our commitment to the circular economy is reflected in our focus on reducing waste, reusing materials, and ensuring that our products and services are designed with sustainability in mind. From recycling initiatives to sustainable product design, we are reimagining how businesses can operate more efficiently and responsibly. ",
    subText: "Subtext for Slide 3",
  },
  {
    src: img3,
    alt: "Slide 4",
    caption: " Reforestation and Biodiversity",
    content:
      "Through our Plant & Life Initiative, we are committed to protecting biodiversity and restoring natural ecosystems. We have planted 100 trees as part of our global reforestation efforts starting from 2024, helping to combat climate change and preserve wildlife habitats.",
    subText: "Subtext for Slide 4",
  },
];

const CorporateSustain: React.FC = () => {
  return (
    <PageWrapper>
      <SustainabilityHeader backgroundImage={backgroundImage} />
      <GlobalSustain />
      <CommitmentSection>
        <SectionContainer>
          <LeftContent>
            <Heading>Environmental Stewardship: Protecting Our Planet</Heading>
          </LeftContent>
          <RightContent>
            <Text>
              At Implica, we are deeply committed to minimizing our
              environmental footprint and promoting a circular economy. By
              investing in clean energy, reducing our resource consumption, and
              preserving natural ecosystems, we are paving the way for a
              greener, more resilient planet.
            </Text>
          </RightContent>
        </SectionContainer>
      </CommitmentSection>
      <HorizontalCarousel images={images} />
      <SustainableFuture />
      <Footer />
    </PageWrapper>
  );
};

export default CorporateSustain;

const PageWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
`;
const CommitmentSection = styled.div`
  width: 100%;
  background-color: white;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 20px;
  min-height: 300px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background-color: white;
  color: black;
  padding: 50px 5%;
  min-height: 50vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 5%;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  padding-right: 50px;
  max-width: 500px;
  text-align: left;
  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 20px;
    max-width: 100%;
  }
`;

const Heading = styled.h1`
  font-family: "Houschka Pro", sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 1.2;
  text-align: left;
  color: rgb(0, 0, 0, 1);

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  text-align: left;
`;

const Text = styled.p`
  max-width: 500px;
  font-family: "Work Sans", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
  color: rgb(0, 0, 0, 1);

  @media (max-width: 768px) {
    font-size: 18px;
    max-width: 100%;
  }
`;
