import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // Import icons

type ImageType = {
  src: string;
  alt: string;
  caption: string;
  content: string;
};

interface HorizontalCarouselProps {
  images: Array<ImageType>;
  autoScrollInterval?: number;
  color?: string;
}

const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({
  images,
  autoScrollInterval = 3000,
  color = "white",
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const duplicatedSlides = [...images, ...images];

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (currentIndex === images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    }
  }, [currentIndex, images.length]);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      nextSlide();
    }, autoScrollInterval);

    return () => clearInterval(autoScroll);
  }, [autoScrollInterval]);

  return (
    <CarouselContainer color={color}>
      {/* Positioned Carousel Buttons at the top */}
      <ButtonWrapper>
        <Button onClick={prevSlide}>
          <FaArrowLeft />
        </Button>
        <Button onClick={nextSlide}>
          <FaArrowRight />
        </Button>
      </ButtonWrapper>

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
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div<{ color: string }>`
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  padding: 20px;
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 40px;
`;

const Slide = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-between;
  background: var(--Color-Pink-Pink-300, rgba(131, 7, 77, 1));
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  height: 560px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const TextContainer = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: var(--Color-Pink-Pink-300, rgba(131, 7, 77, 1));
  color: white;
  border-radius: 8px 0 0 8px;

  @media (max-width: 768px) {
    flex: 1;
    border-radius: 8px 8px 0 0;
  }
`;

const ImageContainer = styled.div`
  flex: 3;
  position: relative;

  @media (max-width: 768px) {
    flex: 1;
    height: 200px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 8px 8px 0;

  @media (max-width: 768px) {
    border-radius: 0 0 8px 8px;
  }
`;

const Caption = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  margin: 0;
  padding-bottom: 10px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const SubText = styled.p`
  margin-top: 10px;
  font-family: Work Sans, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0; /* Set to the top of the container */
  right: 0; /* Align to the right */
  display: flex;
  gap: 10px;
  z-index: 2;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    top: 0;
    right: 0;
  }
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color:grey; /* Set the arrows to black */
  padding: 20px;
  background: none; /* Remove background color */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); /* Slightly enlarge on hover */
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default HorizontalCarousel;
