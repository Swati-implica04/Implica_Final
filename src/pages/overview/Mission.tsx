import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import logo from '../../assets/images/Implica_full_light_transparent_png.png';
import placeholderImage from '../../assets/images/tagLine.jpg';

const PurposeMissionValues = () => {
  const sections = ['purpose', 'mission', 'values'];
  const [activeSection, setActiveSection] = useState<'purpose' | 'mission' | 'values' | null>('purpose');
  const [isReadMore, setIsReadMore] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSection(prev => {
        const currentIndex = sections.indexOf(prev!);
        const nextIndex = (currentIndex + 1) % sections.length;
        return sections[nextIndex] as 'purpose' | 'mission' | 'values';
      });
    }, 5000); // Change every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const handleSectionClick = (section: 'purpose' | 'mission' | 'values') => {
    setActiveSection(section);
    setIsReadMore(false); // Reset "Read More" when clicking on section
  };

  const handleReadMoreClick = () => {
    setIsReadMore(true);
  };

  return (
    <Container>
      <Content>
        <LeftSection>
          <LeftText isActive={activeSection === 'purpose'} onClick={() => handleSectionClick('purpose')}>
            Purpose
          </LeftText>
          <LeftText isActive={activeSection === 'mission'} onClick={() => handleSectionClick('mission')}>
            Mission
          </LeftText>
          <LeftText isActive={activeSection === 'values'} onClick={() => handleSectionClick('values')}>
            Values
          </LeftText>
        </LeftSection>

        <MiddleSection>
          <CircleImage src={placeholderImage} alt="Placeholder" />
        </MiddleSection>

        <RightSection>
          {(!isReadMore || activeSection === 'purpose') && activeSection === 'purpose' && (
            <AnimatedText isVisible={isReadMore || activeSection === 'purpose'}>
              Transforming industries and empowering communities through innovation, strategic insight, and global partnerships for a sustainable future.
              Our purpose at Implica Global Corporation is to go beyond conventional consulting and technology services. Through scalable solutions and innovative technologies, we drive efficiency and sustainability across industries worldwide. We help every business we partner with create a lasting, positive change in the world.
            </AnimatedText>
          )}
          {(!isReadMore || activeSection === 'mission') && activeSection === 'mission' && (
            <AnimatedText isVisible={isReadMore || activeSection === 'mission'}>
              To lead the global revolution of industries through innovation, investment, and sustainable growth, driving success for businesses of all sizes.
              At Implica Global Corporation, our mission is to lead the way in creating meaningful change—both in business and society. We aim to be the trusted partner for organizations worldwide, enabling them to achieve unparalleled success while making a positive difference in the communities they touch.
            </AnimatedText>
          )}
          {(!isReadMore || activeSection === 'values') && activeSection === 'values' && (
            <AnimatedText isVisible={isReadMore || activeSection === 'values'}>
              Our values are the foundation of everything we do. They guide our actions, shape our culture, and define who we are as a company.
              I.M.P.L.I.C.A: Our values define who we are and guide our actions in every endeavor.
              I: Innovation, M: Magnify, P: Partnerships, L: Leadership, I: Integrity, C: Consistency, A: Achievement.
            </AnimatedText>
          )}
          {!isReadMore && <ReadMoreLink onClick={handleReadMoreClick}>Read more</ReadMoreLink>}
        </RightSection>
      </Content>

      <Footer>
        <LogoWrapper>
          <Logo src={logo} alt="Logo" />
        </LogoWrapper>
        <SocialMedia>
          <Icon className="fab fa-facebook" />
          <Icon className="fab fa-instagram" />
          <Icon className="fab fa-twitter" />
          <Icon className="fab fa-linkedin" />
        </SocialMedia>
      </Footer>
    </Container>
  );
};

export default PurposeMissionValues;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #1a1a1a;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 20%;
  padding: 40px;
  color: white;
`;

const LeftText = styled.h2<{ isActive?: boolean }>`
  font-weight: ${({ isActive }) => (isActive ? '600' : 'normal')};
  color: ${({ isActive }) => (isActive ? 'white' : '#888')};
  margin-bottom: 30px;
  cursor: pointer;
  transition: color 0.3s;
  font-family: var(--TypographyFontFamilyHeading-HouschkaRounded);
  font-size: 58px;
  line-height: 64px;
  letter-spacing: -0.03em;
  text-align: left;

  &:hover {
    color: white;
  }
`;

const MiddleSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const CircleImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
`;

const RightSection = styled.div`
  width: 50%;
  color: white;
  padding: 80px;
  margin-top: 150px;
  text-align: left;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounceIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const AnimatedText = styled.p<{ isVisible: boolean }>`
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-bottom: 20px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ isVisible }) =>
    isVisible
      ? css`${fadeIn} 0.5s ease-in-out, ${bounceIn} 0.5s forwards`
      : 'none'};
`;

const ReadMoreLink = styled.a`
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: white;
  width: 100%;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 80px;
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 20px;
`;

const Icon = styled.i`
  font-size: 1.5rem;
  color: #555;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;