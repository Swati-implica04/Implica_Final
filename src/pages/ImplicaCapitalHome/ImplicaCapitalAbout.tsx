import React from "react";
import "./ImplicaCapitalAbout.css"; // Ensure the path to the CSS file is correct
import worldmap from "../../assets/images/world_map_night.jpg";
import ImplicaCapitalFocus from "./ImplicaCapitalFocus";
import HealthAndBiotech from "./healthAndBiotect";
import styled from 'styled-components';
import imagePath from "../../assets/images/CSR/growing-organic-ecological-plants-fields-background.jpg";
import OurFocus from "./overlay";
// Styled Components
const LimitedPartnersSection = styled.section`
  text-align: center;
  padding: 50px;
  background-color: #fff; 

`;

const Heading = styled.h1`
  color: rgba(118, 8, 116, 1); /* Matching the purple color in your design */
  margin-bottom: 20px;
    font-family: Impact;
font-size: 64px;
font-weight: 400;
line-height: 78.06px;
text-align: left;

`;

const Text = styled.p`
  color: #333;
  margin-bottom: 20px;
  font-family: Inter;
font-size: 24px;
font-weight: 400;
line-height: 29.05px;
text-align: left;

`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 30px;
  margin-top: 30px;
`;

const Button = styled.button`
  background-color: rgba(118, 8, 116, 1);
  color: #fff;
  padding: 15px 30px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  
  &:hover {
    background-color:rgba(118, 8, 116, 0.8); /* Darken color on hover */
  }
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end; /* Align content to the right */
  align-items: center;
  background-color: white;
  padding: 20px 5%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 20px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: black;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #620062; /* Purple color for hover effect */
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4a004a; /* Button background color */
  color: white;
  border: none;
  border-radius: 4px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #620062; /* Button hover color */
  }
`;


const ImplicaCapitalHome : React.FC = () => {
  return (
    <div>
          <NavbarContainer>
      {/* Menu Items */}
      <NavMenu>
        <NavItem>About Us</NavItem>
        <NavItem>Focus</NavItem>
        <NavItem>Our Funds</NavItem>
        <NavItem>Contact Us</NavItem>
      </NavMenu>

      {/* Submit Button */}
      <SubmitButton>SUBMIT NOW</SubmitButton>
    </NavbarContainer>
        <div className="ImplicaCapitalHome">
            <h1 className="headerclass">
                ABOUT US
            </h1>
        </div>
        <div className="ImplicaCapText">
          <span className="fontscene">
          <span className=" startCss">Implica Capital </span>  
          is a venture capital firm aiming to have $100 billion in assets under
          management that invests in everything from startups to global corporations and more.
          We focus on markets where technology, innovation, and capital can be used to
          revolutionize, predict, and drive change, creating sustainable value that boosts economic
          growth across sectors.
          </span>
        </div>

        <div className="imagecontent-left">
          <div className="TextLeftpro">
            <span>
              We focus on markets where technology, innovation, and capital can be used to revolutionize, predict, and drive change, creating sustainable value that boosts economic growth across sectors.
            </span>
          </div>
          <div className="imgcsspro">
            <img src={worldmap} alt="World Map" />
          </div>
      </div>
      {/* Add the purple section here */}
      <div className="purple-section">
        <span className="purple-text">
          We aim to work closely with key stakeholders, advising governments and corporations on how to build strong entrepreneurial ecosystems that help startups succeed. Our goal is to support over 6,000 founders and invest in more than 2,500 companies across 20+ countries by 2027.
        </span>
      </div>

      <ImplicaCapitalFocus />
      <HealthAndBiotech />
      <OurFocus/>
      <FundsSection>
      <Heading>OUR FUNDS</Heading>
      <FundCard image={imagePath}>
        <FundTitle>HEALTH & BIOTECH FUND</FundTitle>
        <FundDetails>
          <span>500 Million Dollars</span>
          <span>2025 <Arrow>&gt;</Arrow></span>
        </FundDetails>
      </FundCard>
    </FundsSection>
      <LimitedPartnersSection>
      <Heading>LIMITED PARTNERS</Heading>
      <Text>
        Join a network of visionary investors shaping tomorrow's industries. At Implica Capital, we collaborate with Limited Partners who share our passion for innovation and global impact. Be part of the journey from idea to IPO and beyond.
      </Text>
      <Text>
        Our 2025 Fund is open for LP commitments in Heath & BioTech, until 31 March 2025.
      </Text>
      <Text>
        Join us in building the future by supporting the world's most innovative companies at every stage of their growth journey.
      </Text>
      <ButtonWrapper>
        <Button>Submit Your Interest</Button>
        <Button>Schedule a Call</Button>
      </ButtonWrapper>

    </LimitedPartnersSection>

    </div>
  );
};

export default ImplicaCapitalHome ;
const FundsSection = styled.section`
  // display: flex; /* Align items horizontally */
  justify-content: flex-start; /* Align items to the left */
  align-items: center; /* Vertically align content */
  padding: 50px;
  background-color: #fff;
`;

const TextSection = styled.div`
  text-align: left;
  margin-left: 30px;
`;

interface FundCardProps {
  image: string;
}

const FundCard = styled.div<FundCardProps>`
  position: relative;
  width: 512px;
  height: 512px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const FundTitle = styled.h2`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

const FundDetails = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
  font-size: 16px;

  span {
    display: block;
  }
`;

const Arrow = styled.span`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  margin-left: 5px;
`;