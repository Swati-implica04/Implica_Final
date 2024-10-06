"use client";

import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

type MediaType = {
  src: string;
  alt: string;
  caption: string;
  type: "image" | "video";
};

interface HorizontalCarouselProps {
  media: Array<MediaType>;
}

const fadeInText = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 95%;
  margin: auto;
  overflow: hidden;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const CarouselWrapper = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.7s ease;
  will-change: transform;
  transform: translateX(calc(-100% * ${(props) => props.currentIndex}));
  height: 700px;
  width: 1400px;
  -webkit-overflow-scrolling: touch;
  min-width: 0;
  @media (max-width: 1400px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const CarouselSlide = styled.div`
  min-width: calc(100% - 20px);
  flex-shrink: 0;
  margin-right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  will-change: transform;

  @media (max-width: 768px) {
    min-width: 100%;
    margin-right: 0;
  }
`;

const CarouselMedia = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: relative;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarouselVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
    -webkit-transform: translate3d(0, 0, 0);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.1) 100%);
`;

const CarouselText = styled.h2`
  position: absolute;
  top: 20%;
  left: 10%;
  transition: opacity 0.5s ease;
  z-index: 10;
  animation: ${fadeInText} 0.5s ease;
  opacity: 1;
  font-family: var(--TypefaceHeading);
  font-size: 36px;
  font-weight: 500;
  line-height: 64px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

const CarouselButtons = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 100;

  @media (max-width: 768px) {
    flex-direction: row;
    bottom: 10px;
    right: 10px;
  }
`;

const CarouselButton = styled.button`
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const Arrow = styled.i<{ direction: "left" | "right" }>`
  border: solid #fff;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin-top: 5px;
  transform: ${(props) => (props.direction === "left" ? "rotate(135deg)" : "rotate(-45deg)")};
`;

const PlayPauseIcon = styled.i<{ isPlaying: boolean }>`
  &:before {
    content: ${(props) => (props.isPlaying ? '"❙❙"' : '"▶"')};
    color: #fff;
  }
`;

export default function HorizontalCarousel({ media }: HorizontalCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 10000);
    }
    return () => {
      if (interval !== undefined) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, media.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRefs.current[Number((entry.target as HTMLVideoElement).dataset.index)];
          if (video) {
            if (entry.isIntersecting) {
              video.play().catch((error) => console.error("Error playing video:", error));
            } else {
              video.pause();
              video.currentTime = 0;
            }
          }
        });
      },
      { rootMargin: "0px 0px -50px 0px" } // Adjust rootMargin instead of threshold
    );
  
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.dataset.index = index.toString();
        observer.observe(video);
      }
    });
  
    return () => observer.disconnect();
  }, [currentIndex]);

  return (
    <CarouselContainer>
      <CarouselWrapper ref={carouselRef} currentIndex={currentIndex}>
        {media.map((item, index) => (
          <CarouselSlide key={index}>
            <CarouselMedia>
              {item.type === "image" ? (
                <CarouselImage src={item.src} alt={item.alt} />
              ) : (
                <CarouselVideo
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.src}
                muted
                playsInline
                preload="auto"
                loop
              />
              )}
              <Overlay />
            </CarouselMedia>
            <CarouselText>{item.caption}</CarouselText>
          </CarouselSlide>
        ))}
      </CarouselWrapper>

      <CarouselButtons>
        <CarouselButton onClick={prevSlide}>
          <Arrow direction="left" />
        </CarouselButton>
        <CarouselButton onClick={nextSlide}>
          <Arrow direction="right" />
        </CarouselButton>
        <CarouselButton onClick={() => setIsPlaying(!isPlaying)}>
          <PlayPauseIcon isPlaying={isPlaying} />
        </CarouselButton>
      </CarouselButtons>
    </CarouselContainer>
  );
}
