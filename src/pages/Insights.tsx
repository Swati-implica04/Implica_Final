// src/pages/Insights.tsx
import React from 'react';
import InsightCard from './InsightsCard';
import './InsightCard.css';
import img from "../assets/images/1718791120681.jpeg";
import img1 from "../assets/images/insight/high-angle-journalist-working.jpg";

const Insights: React.FC = () => {
  return (
    <section className="insights-section" aria-labelledby="insights-heading">
      <h2 id="insights-heading" className='ins'>Insights</h2>
      <div className="insights-container">
        <InsightCard
          category="Press Release"
          title="📢 Major Acquisition Announcement!"
          description="We're delighted to share that Implica Global Corporation has successfully acquired Knocksy Sp.zo.o (Poland) & Knocksy oü (Estonia), marking the most significant acquisition in Poland & Estonia for the year 2024! 🎉"
          imageUrl={img}
          link="#"
        />
        <InsightCard
          category="News"
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageUrl={img1}
          link="#"
        />
        {/* <InsightCard
          category="News"
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageUrl={img2}
          link="#"
        /> */}
      </div>
    </section>
  );
};

export default Insights;
