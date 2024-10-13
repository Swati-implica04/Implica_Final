import React, { useState } from "react";
import "./Services.css";
import business from "../assets/images/services/business-people-office.jpg";
import techServicesImage from '../assets/images/services/pexels-shkrabaanthony-5816299.jpg';
import managementConsultingImage from '../assets/images/services/pexels-rdne-5921556.jpg';
import strategyConsultingImage from '../assets/images/services/office-workers-using-finance-graphs.jpg';
import operationalConsultingImage from '../assets/images/services/technician-doing-ai-simulation.jpg';
import innovationConsultingImage from '../assets/images/services/medium-shot-man-holding-device.jpg';
import sustainabilityConsultingImage from '../assets/images/services/man-using-tablet-eco-friendly-wind-power-project-layout.jpg';
import { FaArrowDown, FaArrowUp, FaChevronDown, FaChevronUp } from "react-icons/fa";

const servicesData = [
  { title: "Tech Services", subtitle: "Innovative IT solutions", image: operationalConsultingImage },
  { title: "Management Consulting", subtitle: "Expert business advice", image: managementConsultingImage },
  { title: "Strategy Consulting", subtitle: "Strategic insights", image: strategyConsultingImage },
  { title: "Operational Consulting", subtitle: "Operational efficiency", image: techServicesImage },
  { title: "Marketing Consulting", subtitle: "Targeted marketing strategies", image: business },
  { title: "Sustainability & Green Consulting", subtitle: "Eco-friendly solutions", image: sustainabilityConsultingImage },
  { title: "Innovation & R&D Consulting", subtitle: "Fostering innovation and research", image: innovationConsultingImage }
];

const Services = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleViewAllClick = () => {
    setIsExpanded(!isExpanded); // Toggle expanded state
  };

  return (
    <section className="service-section">
      <h2 className="services-title">Services</h2>
      <div className={`services-cards ${isExpanded ? 'expanded' : ''}`}>
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="oay"></div>
            <div className="service-title">{service.title}</div>
            <div className="service-subtitle">{service.subtitle}</div>
          </div>
        ))}
      </div>
      <button className="view-all-button" onClick={handleViewAllClick}>
        {isExpanded ? 'Collapse' : 'View all topics'}         <span>{isExpanded ? <FaArrowUp /> : <FaArrowDown />}</span>
      </button>
    </section>
  );
};

export default Services;
