import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./igc.css"; // Import the CSS file for styling
import { FaChevronRight } from "react-icons/fa";

const AnimatedCarousel: React.FC = () => {
  const [boxes, setBoxes] = useState([
    {
      id: 1,
      title: "Implica",
      subtitle: "Ventures",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Implica",
      subtitle: "Capital",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Implica",
      subtitle: "Foundation",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 4,
      title: "Implica",
      subtitle: "A.I",
      text: "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    },
  ]);

  const [expandedIndex, setExpandedIndex] = useState(0); // Start with the first box expanded
  const [isPaused, setIsPaused] = useState(false); // State to manage carousel pause

  const rotateBoxes = () => {
    setExpandedIndex((prevIndex) => (prevIndex + 1) % boxes.length);
    setBoxes((prevBoxes) => {
      const newBoxes = [...prevBoxes];
      const lastBox = newBoxes.pop() || prevBoxes[prevBoxes.length - 1]; // Remove the last box or use the last box from prevBoxes if undefined
      newBoxes.unshift(lastBox); // Add it to the beginning

      // Update the IDs
      return newBoxes.map((box, index) => ({
        ...box,
        id: index + 1,
      }));
    });
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (!isPaused) {
      interval = setInterval(() => {
        rotateBoxes();
      }, 3000); // Rotate every 3 seconds
    }

    return () => clearInterval(interval); // Cleanup on pause or unmount
  }, [isPaused, boxes.length]); // Re-run effect when `isPaused` or `boxes.length` changes

  const handleMouseEnter = () => {
    setIsPaused(true); // Pause the carousel on hover
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume the carousel when leaving
  };

  return (
    <div className="i">
      <p className="cardIgc">Igc way</p>
      <div className="carousel-containe">
        {boxes.map((box, index) => (
          <motion.div
            key={box.id}
            className={`carousel-box ${
              expandedIndex === index ? "expanded" : ""
            }`} // Expand only the box at expandedIndex
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={handleMouseEnter} // Pause on hover over each box
            onMouseLeave={handleMouseLeave} // Resume on mouse leave
          >
            <div className="box-content">
              <h1 className="metallic-lustre">{box.title}</h1>
              <p className="metallic-lustre-subtitle">{box.subtitle}</p>
              {expandedIndex === index && (
                <div className="box-text">
                  <p style={{ marginBottom: "20px" }}>{box.text}</p>
                  <span className="read-more-button">
                    Read More <FaChevronRight />
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCarousel;
