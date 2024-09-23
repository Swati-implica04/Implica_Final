import React from 'react';
import styled from 'styled-components';
import worldMap from '../../assets/images/world_map_night.jpg'; // Importing the image

const Container = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const ProductsSection = styled.section`
  display: flex;
`;

const ProductsWrapper = styled.div`
  background-color: white;
  padding-top: 2rem;
`;

const ProductsTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: black;
  font-family: Arial, sans-serif;
  margin-bottom: 1rem;
`;

interface ProductCardProps {
  dark?: boolean;
}

const ProductCard = styled.div<ProductCardProps>`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 360px;
  background-color: ${props => props.dark ? '#1a1a1a' : '#e0e0e0'};
  color: ${props => props.dark ? 'white' : 'black'};
  font-family: Arial, sans-serif;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
`;

const WhatWeDoSection = styled.section`
  display: flex;
  background-color: #1b0e36;
  color: white;
  padding: 3rem;
  align-items: center;
  height:610px
`;

const WhatWeDoText = styled.div`
  flex: 1;
  padding-right: 2rem;
  font-family: Houschka Rounded;
font-size: 48px;
font-weight: 500;
line-height: 40px;
text-align: left;

`;

const WhatWeDoTitle = styled.h2`
  margin-bottom: 1rem;
font-family: Houschka Rounded;
font-size: 48px;
font-weight: 500;
line-height: 40px;
text-align: left;

`;

const WhatWeDoDescription = styled.p`
    font-family: var(--TypographyFontFamilyBody-WorkSans);
font-size: 20px;
font-weight: 400;
line-height: 23.46px;
text-align: left;
`;

const WorldMapImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${worldMap}); /* Use the imported image */
  background-size: cover;
  height: 480px;
  width:640px
`;

const Story = () => {
  return (
    <Container>
      {/* Our Products Section */}
      <ProductsWrapper>
        <ProductsTitle>Our Products</ProductsTitle>
        <ProductsSection>
          <ProductCard>
            <ProductName>Product Name ↗</ProductName>
            <ProductDescription>Product Description</ProductDescription>
          </ProductCard>
          <ProductCard dark>
            <ProductName>Product Name ↗</ProductName>
            <ProductDescription>Product Description</ProductDescription>
          </ProductCard>
        </ProductsSection>
      </ProductsWrapper>

      {/* What We Do Section */}
      <WhatWeDoSection>
        <WhatWeDoText>
          <WhatWeDoTitle>What We Do?</WhatWeDoTitle>
          <WhatWeDoDescription>
            Implica Ventures operates at the intersection of innovation and investment. 
            We actively seek out startups with disruptive ideas and high-growth potential, 
            offering both financial investment and strategic support. Our goal is to help 
            these ventures scale rapidly and sustainably, enabling them to break into global 
            markets and make a lasting impact.
          </WhatWeDoDescription>
        </WhatWeDoText>
        <WorldMapImage />
      </WhatWeDoSection>
      <ServicesContainer>
      <Title>Our Services</Title>
      <CardsWrapper>
        <ServiceCard>
          <CardTitle>Investment</CardTitle>
          <CardText>
            We provide funding to early-stage startups and scale-ups that align with our vision and have the potential for global expansion.
          </CardText>
        </ServiceCard>

        <ServiceCard>
          <CardTitle>Mentorship & Strategy</CardTitle>
          <CardText>
            Beyond investment, we offer hands-on mentorship and strategic guidance from industry experts to help startups refine their business models and expand globally.
          </CardText>
        </ServiceCard>

        <ServiceCard>
          <CardTitle>Partnership Opportunities</CardTitle>
          <CardText>
            Through our extensive network of industry leaders, corporations, and investors, we connect startups with the right partners to accelerate their growth.
          </CardText>
        </ServiceCard>
      </CardsWrapper>
    </ServicesContainer>
    </Container>
  );
};

export default Story;
const ServicesContainer = styled.div`
  padding: 50px;
  text-align: center;
  background-color: #f7f7f7;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ServiceCard = styled.div`
  background-color: rgba(19, 2, 32, 1); /* Dark background */
  color: white;
  width: 340px;
  height: 340px;
  padding: 30px;
  border-radius: 5px;
  text-align: left;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardTitle = styled.h2`
  margin-bottom: 20px;
  font-family: Houschka Rounded;
font-size: 48px;
font-weight: 500;
line-height: 40px;
text-align: left;

  
`;

const CardText = styled.p`
  font-family: var(--TypographyFontFamilyBody-WorkSans);
font-size: 16px;
font-weight: 400;
line-height: 18.77px;
text-align: left;

`;
