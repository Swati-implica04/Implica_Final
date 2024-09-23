// FeaturedNews.tsx
import React from 'react';
import './FeaturedNews.css';

const FeaturedNews = () => {
  return (
    <div className="featured-news-container">
      <div className="featured-news-left">
        <h1>Featured News Segment</h1>
        <div className="featured-news-items">
          <div className="news-item">
            <div className="news-image-placeholder"></div>
            <div className="news-details">
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <div className="news-meta">
                <span>20 Aug 2024</span> | <span>London, GBR</span> | <span className="author">Sebastian</span>
              </div>
            </div>
          </div>
          <div className="news-item">
            <div className="news-image-placeholder"></div>
            <div className="news-details">
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <div className="news-meta">
                <span>20 Aug 2024</span> | <span>London, GBR</span> | <span className="author">Sebastian</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="press-releases-right">
        <h3>More Press Releases</h3>
        <div className="press-release-item">
          <h4>Lorem ipsum dolor sit amet,</h4>
          <div className="press-meta">
            <span>23 Aug 2024</span> | <span>London, GBR</span>
          </div>
        </div>
        <div className="press-release-item">
          <h4>Lorem ipsum dolor sit amet,</h4>
          <div className="press-meta">
            <span>23 Aug 2024</span> | <span>London, GBR</span>
          </div>
        </div>
        <div className="press-release-item">
          <h4>Lorem ipsum dolor sit amet,</h4>
          <div className="press-meta">
            <span>23 Aug 2024</span> | <span>London, GBR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
