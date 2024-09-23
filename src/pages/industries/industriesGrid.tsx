import React from "react";
import styled from "styled-components";
import img from "../../assets/images/tagLine.jpg";
import { Link } from "react-router-dom";
import aviation from "../../assets/images/Industry/plane-is-runway-with-words-private-jet-front.jpg";
import manufactoring from "../../assets/images/Industry/pexels-pixabay-459728.jpg";
import automotive from "../../assets/images/Industry/assembly-line-production-new-car-automated-welding-car-body-production-line-robotic-arm-car-production-line-is-working.jpg";
import health from "../../assets/images/Industry/pexels-pixabay-40568.jpg";
import energy from "../../assets/images/Industry/full-shot-environmental-engineers-working-together.jpg";
import hospitality from "../../assets/images/Industry/pexels-pixabay-460537.jpg";
import realestate from "../../assets/images/Industry/pexels-binyaminmellish-1396122.jpg";
import education from "../../assets/images/Industry/pexels-pixabay-267885.jpg";
import banking from "../../assets/images/Industry/banking-saving-money-management-account-concept (1).jpg";
import chemical from "../../assets/images/Industry/pexels-tima-miroshnichenko-5427673.jpg";
import aggriculture from "../../assets/images/Industry/pexels-quang-nguyen-vinh-222549-2131784.jpg";
import transport from "../../assets/images/Industry/pexels-markusspiske-3905831.jpg";
import food from "../../assets/images/Industry/tasty-american-beer-composition.jpg";
import government from "../../assets/images/Industry/government-authority-law-pillar-graphic.jpg";
import insurance from "../../assets/images/Industry/pexels-kampus-8441787.jpg";
import privateEquty from "../../assets/images/Industry/pexels-markus-winkler-1430818-12188472.jpg";
import sports from "../../assets/images/Industry/pexels-expressivestanley-3148452.jpg";
import fashion from "../../assets/images/Industry/young-people-trendy-wear-posing-street.jpg";
import mining from "../../assets/images/Industry/pexels-tomfisk-2101134.jpg";
import environmental from "../../assets/images/Industry/eco-concept-with-group-volunteers.jpg";
import marine from "../../assets/images/Industry/pexels-mdx014-799091.jpg";
import casinos from "../../assets/images/Industry/pexels-kaysha-147543-4580175.jpg";
import industry from "../../assets/images/Industry/pexels-enginakyurt-1571736.jpg";
import waste from "../../assets/images/Industry/pexels-tomfisk-3181031.jpg";
import wholesale from "../../assets/images/Industry/pexels-mdsnmdsnmdsn-1187299.jpg";
import pharma from "../../assets/images/Industry/pexels-pixabay-208512 (1).jpg";
import biotech from "../../assets/images/Industry/pexels-chokniti-khongchum-1197604-3938022.jpg";
import commerce from "../../assets/images/Industry/pexels-n-voitkevich-6214474.jpg";
import information from "../../assets/images/Industry/pexels-thisisengineering-3861969.jpg";
import Nonprofit from "../../assets/images/Industry/pexels-julia-m-cameron-6994929.jpg";
import cybersecurity from "../../assets/images/Industry/pexels-tima-miroshnichenko-5380610.jpg";
import telecommunications from "../../assets/images/Industry/pexels-athena-1567614.jpg";
import exploration from "../../assets/images/Industry/pexels-pixabay-41006.jpg";
import artificial from "../../assets/images/Industry/pexels-agk42-2599244.jpg";
import robotics from "../../assets/images/Industry/pexels-laser-cheung-70981471-20830212.jpg";
import rail from "../../assets/images/Industry/pexels-raw-photografic-chuy-2713556-4263188.jpg";
import infrastructure from "../../assets/images/Industry/pexels-kindelmedia-9800009.jpg";
import esports from "../../assets/images/Industry/pexels-a-darmel-7862617.jpg";
// import Carbon from "../../assets/images/Industry/pexels-chokniti-khongchum-1197604-3938022.jpg";
import Venture from "../../assets/images/Industry/pexels-rdne-7413909.jpg";
 
import LazyLoad from "react-lazyload";
 
 
const industryTemplate = [
  { name: "Aviation", image: aviation, content: "Content for Aviation", url: "/industry-detail" },
  { name: "Manufacturing", image: manufactoring, content: "Content for Manufacturing", url: "/industry-detail" },
  { name: "Automotive", image: automotive, content: "Content for Automotive", url: "/industry-detail" },
  { name: "Energy and Utilities", image: energy, content: "Content for Energy and Utilities", url: "/industry-detail" },
  { name: "Healthcare", image: health, content: "Content for Healthcare", url: "/industry-detail" },
  { name: "Hospitality and Tourism", image: hospitality, content: "Content for Hospitality and Tourism", url: "/industry-detail" },
  { name: "Real Estate", image: realestate, content: "Content for Real Estate", url: "/industry-detail" },
  { name: "Transportation and Logistics", image: transport, content: "Content for Transportation and Logistics", url: "/industry-detail" },
  { name: "Agriculture", image: aggriculture, content: "Content for Agriculture", url: "/industry-detail" },
  { name: "Food and Beverage", image: food, content: "Content for Food and Beverage", url: "/industry-detail" },
  { name: "Education", image: education, content: "Content for Education", url: "/industry-detail" },
  { name: "Government and Public Sector", image: government, content: "Content for Government and Public Sector", url: "/industry-detail" },
  { name: "Insurance", image: insurance, content: "Content for Insurance", url: "/industry-detail" },
  { name: "Banking", image: banking, content: "Content for Banking", url: "/industry-detail" },
  { name: "Private Equity", image: privateEquty, content: "Content for Private Equity", url: "/industry-detail" },
  { name: "Sports", image: sports, content: "Content for Sports", url: "/industry-detail" },
  { name: "Fashion and Apparel", image: fashion, content: "Content for Fashion and Apparel", url: "/industry-detail" },
  { name: "Chemicals", image: chemical, content: "Content for Chemicals", url: "/industry-detail" },
  { name: "Mining and Metals", image: mining, content: "Content for Mining and Metals", url: "/industry-detail" },
  { name: "Environmental Services", image: environmental, content: "Content for Environmental Services", url: "/industry-detail" },
  { name: "Marine and Shipping", image: marine, content: "Content for Marine and Shipping", url: "/industry-detail" },
  { name: "Gaming and Casinos", image: casinos, content: "Content for Gaming and Casinos", url: "/industry-detail" },
  { name: "Industrial Equipment", image: industry, content: "Content for Industrial Equipment", url: "/industry-detail" },
  { name: "Waste Management", image: waste, content: "Content for Waste Management", url: "/industry-detail" },
  { name: "Wholesale Distribution", image: wholesale, content: "Content for Wholesale Distribution", url: "/industry-detail" },
  { name: "Pharmaceuticals", image: pharma, content: "Content for Pharmaceuticals", url: "/industry-detail" },
  { name: "Biotechnology", image: biotech, content: "Content for Biotechnology", url: "/industry-detail" },
  { name: "E-commerce", image: commerce, content: "Content for E-commerce", url: "/industry-detail" },
  { name: "Information Technology", image: information, content: "Content for Information Technology", url: "/industry-detail" },
  { name: "Nonprofit Organizations", image: Nonprofit, content: "Content for Nonprofit Organizations", url: "/industry-detail" },
  { name: "Cybersecurity", image: cybersecurity, content: "Content for Cybersecurity", url: "/industry-detail" },
  { name: "Telecommunications", image: telecommunications, content: "Content for Telecommunications", url: "/industry-detail" },
  { name: "Space Exploration & Aerospace", image: exploration, content: "Content for Space Exploration & Aerospace", url: "/industry-detail" },
  { name: "Artificial Intelligence", image: artificial, content: "Content for Artificial Intelligence", url: "/industry-detail" },
  { name: "Robotics", image: robotics, content: "Content for Robotics", url: "/industry-detail" },
  { name: "Rail Transportation", image: rail, content: "Content for Rail Transportation", url: "/industry-detail" },
  { name: "EV Infrastructure", image: infrastructure, content: "Content for EV Infrastructure", url: "/industry-detail" },
  { name: "E-sports", image: esports, content: "Content for E-sports", url: "/industry-detail" },
  { name: "Carbon Capture and Utilization (CCU)", image: img, content: "Content for Carbon Capture and Utilization (CCU)", url: "/industry-detail" },
  { name: "Venture Capital", image: Venture, content: "Content for Venture Capital", url: "/industry-detail" },
];
 
const IndustryGrid: React.FC = () => {
  return (
    <SectionContainer>
      <Title>Industries we impact</Title>
      <GridContainer>
        {industryTemplate.map((industry, index) => (
               <LazyLoad height={
                300} offset={100}> 
          <Link to={industry.url} key={index} style={{ textDecoration: 'none' }}>
            <Card>
              <ImageWrapper>
           {/* Use LazyLoad here */}
                  <Image
                    src={industry.image}
                    alt={industry.name}
                  />
              </ImageWrapper>
              <CardTitle>{industry.name}</CardTitle>
            </Card>
          </Link>
          </LazyLoad>

        ))}
      </GridContainer>
    </SectionContainer>
  );
};

export default IndustryGrid;
 
// Styled Components
 
const SectionContainer = styled.section`
  padding: 40px 20px;
  text-align: center;
  background-color: #f9f9f9;
`;
 
const Title = styled.p`
  margin-bottom: 40px;
  margin-left: 40px;
  font-family: var(--TypefaceHeading);
  font-size: 64px;
  font-weight: 600;
  line-height: 64px;
  text-align: left;
  color: rgba(0, 0, 0, 1);
`;
 
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
  align-items: center;
`;
 
const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  text-align: center;
  max-width: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 270px;
height: 270px;
padding: 24px 0 0 0;
gap: 24px;
border-radius: 8px;
 
`;
 
const ImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto 20px auto;
  border-radius: 50%;
  overflow: hidden;
`;
 
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
 
const CardTitle = styled.h3`
  color: #333;
  font-family: var(--TypographyFontFamilyBody-WorkSans);
font-size: 18px;
font-weight: 600;
line-height: 32px;
text-align: left;
padding-left: 20px;
`;