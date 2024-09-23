import React from 'react';
import './FeaturedContacts.css';

const FeaturedContacts: React.FC = () => {
  return (
    <div className="featured-contacts">
      <h1 className='Ls'>Featured Contacts</h1>
      <p className='fp'>For any media-related queries, please reach out to our communications and media relations teams.</p>
      <div className="contact-grid">
        {[...Array(5)].map((_, index) => (
          <div className={`contact-card ${index === 3 || index === 4 ? 'centered-row' : ''}`} key={index}>
            <h3 className='HeadPlace'>Heading/name of Place</h3>
            <div className="contact-info">
              <span className="email-icon">✉️</span>
              <a className="emailLink"href="mailto:requiredemail@email.com">requiredemail@email.com</a>
            </div>
            <div className="contact-info">
              <span className="email-icon">✉️</span>
              <a className="emailLink" href="mailto:requiredemail@email.com">requiredemail@email.com</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedContacts;
