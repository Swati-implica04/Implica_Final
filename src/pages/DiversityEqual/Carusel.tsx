import { color } from "framer-motion";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Define the type for a single image
type ImageType = {
  src: string;
  alt: string;
  caption: string;
  content: string; // Additional subtext for the body content
};

// Define the props for the HorizontalCarousel component
interface HorizontalCarouselProps {
  images: Array<ImageType>;
  autoScrollInterval?: number; // Optional prop for auto-scroll interval
  color?: string;
}

const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({
  images,
  autoScrollInterval = 3000, // Default auto-scroll interval set to 3 seconds
color= "white",
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const duplicatedSlides = [...images, ...images];

  // Function to handle next slide
  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Reset transition when reaching the end of the slides
  useEffect(() => {
    if (currentIndex === images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0); // Reset index without animation
      }, 700);
    }
  }, [currentIndex, images.length]);

  // Auto-scroll effect
  useEffect(() => {
    const autoScroll = setInterval(() => {
      nextSlide();
    }, autoScrollInterval);

    return () => clearInterval(autoScroll); // Cleanup interval on unmount
  }, [autoScrollInterval]);

  return (
    <CarouselContainer>
      {/* Carousel Images */}
      <CarouselWrapper
        style={{
          transform: `translateX(calc(-100% * ${currentIndex}))`,
          transition: isTransitioning ? "transform 0.7s ease" : "none",
        }}
      >
        {duplicatedSlides.map((image, index) => (
          <Slide key={index}>
            <TextContainer>
              <Caption>{image.caption}</Caption>
              <SubText>{image.content}</SubText>
            </TextContainer>
            <ImageContainer>
              <Image src={image.src} alt={image.alt} />
            </ImageContainer>
          </Slide>
        ))}
      </CarouselWrapper>

      {/* Navigation Buttons */}
      <CarouselButtons>
        <Button onClick={prevSlide}>
          <Arrow className="left" />
        </Button>
        <Button onClick={nextSlide}>
          <Arrow className="right" />
        </Button>
      </CarouselButtons>
    </CarouselContainer>
  );
};

export default HorizontalCarousel;

// Carousel container with overall layout and centering
export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: color;
`;

// Carousel wrapper for the slides, handles the transition
export const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Slide = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-between; /* Align text and image side by side */
  background: var(--Color-Pink-Pink-300, rgba(131, 7, 77, 1));
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* Soft shadow for slides */
  border-radius: 8px; /* Slight rounding on the corners */
  overflow: hidden;
  height: 540px;
  margin-right: 30px;
`;

// Text container on the left-hand side of the slide (70% width)
export const TextContainer = styled.div`
  flex: 7; /* 70% of the width */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: var(--Color-Pink-Pink-300, rgba(131, 7, 77, 1));
  color: white;
  border-radius: 8px 0 0 8px; /* Rounded corners on the left */
`;

// Container for the image on the right-hand side of the slide (30% width)
export const ImageContainer = styled.div`
  flex: 3; /* 30% of the width */
  position: relative;
`;

// Image styling to fit the slide
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 8px 8px 0; /* Rounded corners on the right */
`;

// Styling for the caption (large heading text)
export const Caption = styled.h2`
  font-family: Houschka Rounded;
  font-size: 48px;
  font-weight: 600;
  line-height: 48px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  margin: 0;
  padding-bottom: 10px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8); /* Text shadow for readability */
`;

// Subtext or body text below the caption
export const SubText = styled.p`
  margin-top: 10px;
  font-family: Work Sans;
  font-size: 24px;
  font-weight: 500;
  line-height: 28.15px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8); /* Subtext shadow for better readability */
`;

// Buttons container for left and right arrows
export const CarouselButtons = styled.div`
  position: absolute;
  top: 0px; /* Positioning arrows at the top */
  left: 90%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  width: 120px; /* Fixed width for buttons */
  z-index: 2;
`;

// Individual button styling for navigation arrows
export const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: black;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* Soft shadow for the buttons */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// Arrow for the left and right navigation
export const Arrow = styled.div`
  border: solid black;
  border-width: 0 3px 3px 0;
  padding: 10px;
  transform: ${(props) =>
    props.className === "left" ? "rotate(135deg)" : "rotate(-45deg)"};
  -webkit-transform: ${(props) =>
    props.className === "left" ? "rotate(135deg)" : "rotate(-45deg)"};
`;
