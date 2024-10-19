import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import image1 from "../../assets/images/IMG_0035-PL Legitymacja szkolna-35x45 mm.jpg";
import img from "../../assets/images/team-2.jpeg";
import img2 from "../../assets/images/IMG_0681.jpg";
import img3 from "../../assets/images/2024-09-22-21-03-25-123.jpg";
import img4 from "../../assets/images/Implica Our Team.png";

const CoreFoundersContainer = styled.div`
  background-color: black;
  color: white;
  padding: 30px;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const CoreTitle = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 40px;
  text-align: left;
  padding-top: 60px;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding-top: 20px;
    margin-bottom: 20px;
  }
`;

const FounderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }
`;

const FounderDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  max-width: 50%;
  padding: 20px;

  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
    padding: 10px 0;
  }
`;

const FounderRole = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FounderName = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
`;

const FounderQuote = styled.p`
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const IconLink = styled.a`
  font-size: 1.5rem;
  color: white;
  transition: color 0.3s;

  &:hover {
    color: #0072b1;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Image = styled.img`
  width: 432px;  // Set the width you want
  height: 575px;  // Set the height you want
  // object-fit: contain;  // This ensures the image covers the area while keeping its aspect ratio
  margin-bottom: 20px;
  object-position: center;

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 400px;
  }
`;

const TeamSectionContainer = styled.div`
  background-color: black;
  color: white;
  padding: 30px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const TeamTitle = styled.h2`
  margin-bottom: 30px;
  letter-spacing: 2px;
  // font-family: Houschka Rounded, sans-serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 48px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 20px;
  }
`;

const TeamImage = styled.img`
  max-width: 900px;
  max-height: 675px;
  margin-bottom: 20px;
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const TeamDescription = styled.p`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 20px;
  font-family: var(--TypefaceBody);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding-top: 10px;
  }
`;

const CoreFounders = () => {
  return (
    <CoreFoundersContainer>
      <CoreTitle>Our Leadership</CoreTitle>
      <FounderCard>
        <Image src={img2} alt="Sarved Dhar Badgayan" />
        <FounderDetails>
          <FounderRole>FOUNDER & C.E.O</FounderRole>
          <FounderName>Sarved Dhar Badgayan</FounderName>
          <FounderQuote>
            In a world of possibilities, we don't follow trends; we set them. Our drive for innovation and excellence pushes us to conquer markets, disrupt industries, and lead globally. We're not just part of the future; we're shaping it.
          </FounderQuote>
          <SocialIcons>
            <IconLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </IconLink>
            <IconLink href="mailto:Sarved.badgayan@implicaglobal.com">
              <FaEnvelope />
            </IconLink>
          </SocialIcons>
        </FounderDetails>
      </FounderCard>

      <FounderCard>
        <FounderDetails>
          <FounderRole>Operational Director (Knocksy) Strategic Alliance & Partnership Division</FounderRole>
          <FounderName>Francesco Congiu</FounderName>
          <SocialIcons>
            <IconLink href="https://www.linkedin.com/in/francesco-congiu/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </IconLink>
            <IconLink href="mailto:francesco.congiu@implicaglobal.com">
              <FaEnvelope />
            </IconLink>
          </SocialIcons>
        </FounderDetails>
        <Image src={image1} alt="Francesco Congiu" />
      </FounderCard>

      <FounderCard>
        <Image src={img} alt="Sebastian Opocensky" />
        <FounderDetails>
          <FounderRole>Vice President - Technology</FounderRole>
          <FounderName>Sebastian Opocensky</FounderName>
          <SocialIcons>
            <IconLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </IconLink>
            <IconLink href="mailto:ceo.office@implicaglobalcorp.com">
              <FaEnvelope />
            </IconLink>
          </SocialIcons>
        </FounderDetails>
      </FounderCard>

      <FounderCard>
        <FounderDetails>
          <FounderRole>Chief Operating Officer</FounderRole>
          <FounderName>Reetish Mohan Panigrahy</FounderName>
          <SocialIcons>
            <IconLink href="https://www.linkedin.com/in/reetish-mohan-panigrahy/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </IconLink>
            <IconLink href="mailto:reetish.panigrahy@implicaglobal.com">
              <FaEnvelope />
            </IconLink>
          </SocialIcons>
        </FounderDetails>
        <Image src={img3} alt="Reetish Mohan Panigrahy" />
      </FounderCard>

      <TeamSectionContainer>
        <TeamTitle>Our team</TeamTitle>
        <TeamImage src={img4} alt="Our Team" />
        <TeamDescription>
        Meet our dynamic team, dedicated to driving innovation and excellence. With diverse expertise and a shared vision, we empower growth, foster collaboration, and guide our organization toward success. Our commitment to integrity and innovation sets the foundation for a thriving future.
        </TeamDescription>
      </TeamSectionContainer>
    </CoreFoundersContainer>
  );
};

export default CoreFounders;