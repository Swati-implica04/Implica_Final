import React, { useState, useRef, useEffect } from "react";
import "./image.css";

type MediaType = {
  src: string;
  alt: string;
  caption: string;
  type: "image" | "video";
};

interface HorizontalCarouselProps {
  media: Array<MediaType>;
}

const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const duplicatedSlides = [...media, ...media];

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (currentIndex === media.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 7000);
    }
  }, [currentIndex, media.length]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 10000);
    } else if (interval !== undefined) {
      clearInterval(interval);
    }
    return () => {
      if (interval !== undefined) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, currentIndex]);

  // Adding a useEffect hook to handle autoplay behavior
  useEffect(() => {
    const currentSlide = document.querySelectorAll(
      ".horizontal-carousel-slide"
    )[currentIndex];
    if (currentSlide) {
      const video = currentSlide.querySelector("video");
      if (video) {
        video.play(); // Trigger play when the slide becomes active
      }
    }
  }, [currentIndex]);

  return (
    <div className="horizontal-carousel-container">
      <div
        className="horizontal-carousel-wrapper"
        ref={carouselRef}
        style={{
          '--current-index': currentIndex,
          transform: `translateX(calc(-100% * ${currentIndex}))`,
          transition: isTransitioning ? 'transform 0.7s ease' : 'none',
        } as React.CSSProperties}
      >
        {duplicatedSlides.map((item, index) => (
          <div
            className={`horizontal-carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ height: "700px", width: "1100px" }}
            key={index}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={item.alt} className="carousel-image" />
            ) : (
              <video
                src={item.src}
                className="carousel-video"
                muted
                loop
                playsInline // Important for mobile autoplay support
                autoPlay={index === currentIndex} // Only autoplay the current video
              />
            )}
            <h2 className="carousel-text">{item.caption}</h2>
          </div>
        ))}
      </div>

      <div className="carousel-buttons">
        <button className="carousel-button prev-button" onClick={prevSlide}>
          <i className="arrow left"></i>
        </button>
        <button className="carousel-button next-button" onClick={nextSlide}>
          <i className="arrow right"></i>
        </button>
        <button
          className="carousel-button play-button"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <i className="pause-icon"></i> : <i className="play-icon"></i>}
        </button>
      </div>
    </div>
  );
};

export default HorizontalCarousel;
