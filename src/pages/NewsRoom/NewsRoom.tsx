// NewsRoom.tsx
import React from 'react';
import './NewsRoom.css';
import ImageCarousel from '../image';
import img from "../../assets/images/img.png";
import img2 from "../../assets/images/tagLine.jpg";
import FNews from "./FeaturedNews";
import MKit from "./MediaKit"
import FContacts from "./FeaturedContacts"

interface MediaType {
  src: string;
  alt: string;
  caption: string;
  type: "image" | "video"; // Ensure type is a union of string literals
}

const NewsRoom: React.FC = () => {
  const media: MediaType[] = [
    {
      src: img2, // Image source (for the image)
      alt: "Slide 1",
      caption: "From Insight to Impact: Leading the Way in Tech and Strategy Consulting.",
      type: "image", // Specify the type as 'image'
    },
    {
      src: img2, // Video source (for the video)
      alt: "Slide 2",
      caption: "Implica: Be part of the movement, drive the next big change.",
      type: "video", // Specify the type as 'video'
    },
    {
      src: img,
      alt: "Slide 3",
      caption: "Join the momentum—Implica is shaping the future.",
      type: "image", // Specify the type as 'image'
    },

  ];
  return (
    <div>
    <div className="newsroom-container">
      {/* Left section */}
      <div className="newsroom-left">
        <h1>Heading</h1>
        <p>
          Stay up to date with the latest news from Implica— and see how we’re
          building a better working world.
        </p>
      </div>

      {/* Right section */}
      <div className="newsroom-right">
        <h2>Media Enquiries</h2>
        <p>Contact the Global PR Team</p>
        <button className="btn">Get in Touch</button>
      </div>
    </div>
    <ImageCarousel media={media} />
    < FNews />
    < MKit />
    < FContacts />
    </div>
  );
};

export default NewsRoom;
