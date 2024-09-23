import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import Footer from '../Footer';

// Container for the entire layout
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 80px 0px 20px 80px;
  font-family: Arial, sans-serif;
  background-color: white; /* Set the background color to white */
  position: relative; /* Added to make sure the back button positions correctly */
`;

// Back button styling
const BackButton = styled.button`
  position: absolute;
  padding-top: 70px;
  top: 20px;
  left: 20px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: #000000;
  cursor: pointer;
  z-index: 1000; /* Ensures the back button is on top of other elements */

  &:hover {
    text-decoration: underline;
  }
`;

// Header section for the title and subtitle
const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

// Title style
const Title = styled.h1`
  color:#000000;
  margin: 50px 10px;
  font-family: var(--TypographyFontFamilyHeading-HouschkaRounded);
  font-size: 46px;
  font-weight: 500;
  line-height: 52px;
  letter-spacing: -0.03em;
  text-align: left;
  padding-top: 30px;
  padding-right: 65px;
`;

// Image placeholder (grey box)
const ImagePlaceholder = styled.div`
  width: 640px;
  height: 360px;
  background-color: #D9D9D9; /* Grey background */
  margin-bottom: 40px;
`;

// Footer section for the paragraph text
const Foot = styled.div`
  padding: 40px 20px;
  width: 100%;
  text-align: center;
  padding-left: 80px;
  padding-right: 50px;
  background-color: #FFFFFF; /* Ensure background is transparent */
`;

// Paragraph style
const Paragraph = styled.p`
  line-height: 1.8;
  margin: 0 0 10px;
  color: #000000; /* Ensure text color is black */
  font-family: var(--TypographyFontFamilyBody-WorkSans);
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.01em;
  text-align: left;
`;

// "More like this" Section

const MoreLikeThisSection = styled.div`
  padding: 50px 80px;
  background-color: #FFFFFF;
`;

// Title for "More like this"
const MoreLikeThisTitle = styled.h2`
  color: #000000;
  margin-bottom: 20px;
  font-family: var(--TypographyFontFamilyHeading-HouschkaRounded);
  font-size: 36px;
  font-weight: 500;
  line-height: 46px;
  letter-spacing: -0.01em;
  text-align: left;
`;

// Flex container for the blog cards
const BlogCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Space between the cards */
`;

// Individual blog card
const BlogCard = styled.div`
  flex: 1;
  background-color: #FFFFFF;
  text-align: left;
  max-width: 352px;
  max-hight: 329px;
  gap: 20px;
  opacity: 0px;
  padding-top: 50px;
`;

// Card image placeholder
const CardImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background-color: #D9D9D9;
  margin-bottom: 15px;
`;

// Blog heading
const BlogHeading = styled.h3`
  color: #000000;
  margin-bottom: 10px;
  font-family: Houschka Rounded;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
`;

// Blog metadata (date and author)
const BlogMetadata = styled.div`
  color: #000000;
  font-family: Work Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 18.77px;
  text-align: left;

  span {
    font-weight: bold;
  }
`;

const CommonBlog = () => {
  const navigate = useNavigate(); // Get the navigate function

  return (
    <div>
      <Container>
        {/* Back button */}
        <BackButton onClick={() => navigate(-1)}>{"<-"}  Aviation</BackButton>

        {/* Header Section */}
        <Header>
          <Title>Internationalization in the Aviation Sector: Wings Across the world</Title>
        </Header>

        {/* Image Placeholder */}
        <ImagePlaceholder />

        {/* Footer Section */}
      </Container>
      <Foot>
        <Paragraph>
          The aviation sector, a cornerstone of global connectivity and commerce, has seen exponential growth in its internationalization over the past few decades. 
          This process, involving the cross-border expansion of airlines, airports, and related industries, has revolutionized global travel and trade. 
          Airlines have extended their networks, airports have become international hubs, and aviation services have evolved to meet the needs of a global clientele. 
          This internationalization is driven by a combination of economic imperatives, technological advancements, and geopolitical factors, 
          enabling seamless movement across continents. However, the journey towards a fully integrated global aviation sector is not without its challenges. 
          Issues such as regulatory differences, environmental concerns, and fluctuating market dynamics pose significant hurdles. Industry must navigate these complexities 
          to sustain growth while adapting to the rapidly changing global landscape.
        </Paragraph>
      </Foot>

      {/* "More like this" Section */}
      <MoreLikeThisSection>
        <MoreLikeThisTitle>More like this</MoreLikeThisTitle>
        <BlogCardsContainer>
          <BlogCard>
            <CardImagePlaceholder />
            <BlogHeading>Blog Heading</BlogHeading>
            <BlogMetadata>
              20 Aug 2024 | <span>Sebastian</span>
            </BlogMetadata>
          </BlogCard>
          <BlogCard>
            <CardImagePlaceholder />
            <BlogHeading>Blog Heading</BlogHeading>
            <BlogMetadata>
              20 Aug 2024 | <span>Sebastian</span>
            </BlogMetadata>
          </BlogCard>
          <BlogCard>
            <CardImagePlaceholder />
            <BlogHeading>Blog Heading</BlogHeading>
            <BlogMetadata>
              20 Aug 2024 | <span>Sebastian</span>
            </BlogMetadata>
          </BlogCard>
        </BlogCardsContainer>
      </MoreLikeThisSection>

      <Footer />
    </div>
  );
};

export default CommonBlog;
