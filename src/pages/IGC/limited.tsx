import React from 'react';
import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;
  background-color: #fff;
`;

export const Heading = styled.h1`
  color: #5e2689;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: #333;
  font-size: 18px;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

export const ActionButton = styled.button`
  background-color: #5e2689;
  color: white;
  padding: 15px 30px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a206d;
  }
`;

const LimitedPartners = () => {
  return (
    <SectionWrapper>
      <Heading>LIMITED PARTNERS</Heading>
      <Description>
        Join a network of visionary investors shaping tomorrow’s industries. At Implica Capital, we collaborate with Limited Partners who share our passion for innovation and global impact. Be part of the journey from idea to IPO and beyond.
      </Description>
      <Description>
        Our 2025 Fund is open for LP commitments in Heath & BioTech, until 31 March 2025.
      </Description>
      <Description>
        Join us in building the future by supporting the world’s most innovative companies at every stage of their growth journey.
      </Description>
      <ButtonContainer>
        <ActionButton>SUBMIT YOUR INTEREST</ActionButton>
        <ActionButton>SCHEDULE A CALL</ActionButton>
      </ButtonContainer>
    </SectionWrapper>
  );
};

export default LimitedPartners;
