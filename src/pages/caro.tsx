import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import video2 from "../assets/images/video/12324291-uhd_3840_2160_60fps.mp4"
import video1 from "../assets/images/video/5396818-uhd_3840_2160_30fps.mp4"
import img1 from "../assets/images/video/pexels-jokassis-5534595.jpg"
import img from "../assets/images/beautiful-city-landscape-with-tall-buildings.jpg"

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const CarouselTrack = styled.div<{ $currentIndex: number }>`
  display: flex;
  transition: transform 0.3s ease-in-out;
  height: 100%;
  transform: translateX(${props => props.$currentIndex * -100}%);
`

const CarouselSlide = styled.div`
  flex: 0 0 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`

const CarouselMedia = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CarouselVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%);
`

const Content = styled.div`
  position: absolute;
  bottom: 60px;
  left: 20px;
  right: 20px;
  color: white;
`

const Title = styled.h2`
  font-size: clamp(18px, 4vw, 24px);
  font-weight: bold;
  margin: 0 0 10px 0;
`

const Subtitle = styled.p`
  font-size: clamp(14px, 3vw, 18px);
  margin: 0;
  opacity: 0.9;
`

const Navigation = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  touch-action: manipulation;
`

const PlayPauseButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  touch-action: manipulation;
`

const carouselData = [
  {
    src: video1,
    alt: "Slide 1",
    caption: "From Insight to Impact: Leading the Way in Tech and Strategy Consulting.",
    type: "video",
    subtitle: 'Leading the Way in Tech and Strategy Consulting',
  },
  {
    src: img1,
    alt: "Slide 2",
    caption: "Trust in Every Step, Growth in Every Direction.",
    type: "image",
    subtitle: 'Leading the Way in Tech and Strategy Consulting',
  },
  {
    src: video2,
    alt: "Slide 3",
    caption: "Global Strategies, Tailored Solutions.",
    type: "video",
    subtitle: 'Leading the Way in Tech and Strategy Consulting',
  },
  {
    src: img,
    alt: "Slide 4",
    caption: "Implica: The movement for those ready to create the next big wave.",
    type: "image",
    subtitle: 'Leading the Way in Tech and Strategy Consulting',
  },
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1))
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        handleNext()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex && isPlaying) {
          video.play().catch(error => console.error('Error playing video:', error))
        } else {
          video.pause()
        }
      }
    })
  }, [currentIndex, isPlaying])

  return (
    <CarouselContainer>
      <CarouselTrack $currentIndex={currentIndex}>
        {carouselData.map((slide, index) => (
          <CarouselSlide key={index}>
            <CarouselMedia>
              {slide.type === 'image' ? (
                <CarouselImage src={slide.src} alt={slide.alt} />
              ) : (
                <CarouselVideo
                  ref={el => videoRefs.current[index] = el}
                  src={slide.src}
                  loop
                  muted
                  playsInline
                />
              )}
            </CarouselMedia>
            <Overlay />
            <Content>
              <Title>{slide.caption}</Title>
              <Subtitle>{slide.subtitle}</Subtitle>
            </Content>
          </CarouselSlide>
        ))}
      </CarouselTrack>
      <Navigation>
        <NavButton onClick={handlePrev} aria-label="Previous slide">
          <ChevronLeft size={24} />
        </NavButton>
        <PlayPauseButton onClick={togglePlayPause} aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}>
          {isPlaying ? <Pause size={24} color="white" /> : <Play size={24} color="white" />}
        </PlayPauseButton>
        <NavButton onClick={handleNext} aria-label="Next slide">
          <ChevronRight size={24} />
        </NavButton>
      </Navigation>
    </CarouselContainer>
  )
}