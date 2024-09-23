import React, { useState, useRef, useEffect } from "react";
import "./image.css";

// Define the type for a single media item (image or video)
type MediaType = {
  src: string;
  alt: string;
  caption: string;
  type: "image" | "video"; // New property to differentiate between image and video
};

// Define the props for the HorizontalCarousel component
interface HorizontalCarouselProps {
  media: Array<MediaType>; // Change 'images' to 'media'
}

const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1); // Start from the second slide
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  
  // Duplicating the slides for the infinite effect
  const duplicatedSlides = [...media, ...media];

  // Function to handle next slide
  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  // Handle continuous loop effect
  useEffect(() => {
    if (currentIndex === media.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0); // Reset index without animation
      }, 7000); // Match transition duration
    }
  }, [currentIndex, media.length]);

  // Auto-play effect
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide(); // Automatically go to the next slide
      }, 10000); // Change slide every 7 seconds
    } else if (interval !== undefined) {
      clearInterval(interval);
    }

    // Cleanup on unmount or when the playing state changes
    return () => {
      if (interval !== undefined) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, currentIndex]);

  return (
    <div className="horizontal-carousel-container">
      {/* Carousel Media (Images or Videos) */}
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
            className={`horizontal-carousel-slide ${index === currentIndex ? "active" : ""}`}
            style={{ height: "700px", width: "1100px" }}
            key={index}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={item.alt} className="carousel-image" />
            ) : (
              <video
                src={item.src}
                className="carousel-video"
                controls
                autoPlay={index === currentIndex} // Autoplay only the current video
                muted
                loop // Ensures video loops continuously
              />
            )}
            <h2 className="carousel-text">{item.caption}</h2>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="carousel-buttons">
        <button className="carousel-button prev-button" onClick={prevSlide}>
          <i className="arrow left"></i>
        </button>
        <button className="carousel-button next-button" onClick={nextSlide}>
          <i className="arrow right"></i>
        </button>
        {/* Play/Pause Button */}
        <button className="carousel-button play-button" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <i className="pause-icon"></i> : <i className="play-icon"></i>}
        </button>
      </div>
    </div>
  );
};

export default HorizontalCarousel;
