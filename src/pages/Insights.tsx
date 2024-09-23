// src/pages/Insights.tsx
import React from 'react';
import InsightCard from './InsightsCard';
import './InsightCard.css';
import img from "../assets/images/1718791120681.jpeg";
import img1 from "../assets/images/1721836448134.jpeg";

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
          link="https://www.linkedin.com/posts/implica-global-corporation_implica-global-acquires-knocksy-spzoo-activity-7209157844024049664-F8aR?utm_source=share&utm_medium=member_desktop"
        />
        <InsightCard
          category="News"
          title="Implica Global Corporation"
          description="Implica Global Corporation had the incredible opportunity to represent Poland at the WMF - We Make Future 2024 in Bologna, Italy! 🌟"
          imageUrl={img1}
          link="https://www.linkedin.com/posts/implica-global-corporation_wmf2024-innovation-techconsulting-activity-7221905514077573122-qn4V?utm_source=share&utm_medium=member_desktop"
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
