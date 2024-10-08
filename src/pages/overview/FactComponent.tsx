import React from 'react';
import styled from 'styled-components';

// Define types for the props
interface Fact {
  id: number;
  value: string;
  text: string;
}

interface FactsComponentProps {
  title: string;
  facts: Fact[];
  backgroundimage: string;
//   icon: string;
}

const FactsComponent: React.FC<FactsComponentProps> = ({ title, facts, backgroundimage }) => {
  return (
    <Container backgroundImage={backgroundimage}>
      <Title>{title}</Title>
      <FactsGrid>
        {facts.map((fact) => (
          <Card key={fact.id}>
            {/* <Icon src={icon} alt="icon" /> */}
            <FactValue>{fact.value}</FactValue>
            <FactText>{fact.text}</FactText>
          </Card>
        ))}
      </FactsGrid>
    </Container>
  );
};

export default FactsComponent;

// Styled Components with TypeScript support
const Container = styled.div<{ backgroundImage: string }>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 50px;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 30px;
`;

const FactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  width: 270px;
  height: 360px;
  padding: 24px 0 0 0;
  gap: 8px;
  border-radius: 8px 0 0 0;
  border: 2px solid transparent;
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  position: relative;
  border: 2px solid var(--Color-Violet-Violet-400, rgba(78, 10, 127, 1))

`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  padding: 5px;
`;

const FactValue = styled.div`
  margin-top: 160px;
font-family: var(--TypographyFontFamilyHeading-HouschkaRounded);
font-size: 41px;
font-weight: 600;
line-height: 48px;
letter-spacing: -0.03em;
text-align: left;

`;

const FactText = styled.div`
  margin-top: 10px;
font-family: var(--TypographyFontFamilyBody-WorkSans);
font-size: 18px;
font-weight: 600;
line-height: 28px;
letter-spacing: 0.01em;
text-align: left;
`;
