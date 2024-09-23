// src/components/InsightCard.tsx
import React from 'react';
import './InsightCard.css';

interface InsightCardProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ category, title, description, imageUrl, link }) => {
  return (
    <div className="insight-card">
      <div className="insight-card-content">
        <div className="insight-card-category">{category}</div>
        <h3 className="insight-card-title">{title}</h3>
        <p className="insight-card-description">{description}</p>
        <a href={link} className="insight-card-link">
          Read More &rarr;
        </a>
      </div>
      <div className="insight-card-image-wrapper">
        <img src={imageUrl} alt={title} className="insight-card-image" />
      </div>
    </div>
  );
};

export default InsightCard;
