import React from 'react';
import styled from 'styled-components';
import img4 from "../../assets/images/CSR/people-meeting-support-group.jpg";
import img3 from "../../assets/images/CSR/young-beautiful-woman-is-practicing-yoga-mountain-view.jpg";
import img2 from "../../assets/images/CSR/people-planting-tree-countryside.jpg";
import img1 from "../../assets/images/CSR/friends-learning-study-group.jpg";

const CSRFrameWork = () => {
  const pillars = [
    { 
      id: 1, 
      title: '⁠Empowering Education', 
      description: '• Digital Literacy Programs\n• Girl Child Education Initiatives\n• Skills Development', 
      img: img1 
    },
    { 
      id: 2, 
      title: '⁠Environmental Sustainability', 
      description: '• Reforestation and Afforestation Programs\n• Carbon Reduction Efforts\n• Biodiversity Conservation', 
      img: img2 
    },
    { 
      id: 3, 
      title: '⁠Health & Well-Being', 
      description: '• Free Medical Camps\n• Mental Health Advocacy\n• Critical Health Treatment Support', 
      img: img3 
    },
    { 
      id: 4, 
      title: '⁠Social Inclusion & Diversity', 
      description: '• Inclusive Employment Programs\n• Community Empowerment\n• Women Empowerment', 
      img: img4 
    }
  ];

  return (
    <CSRContainer>
      {/* Header Section */}
      <CSRHeader>
        <h1>Our CSR framework is built around four strategic pillars that drive impact.</h1>
      </CSRHeader>
      
      {/* Pillar Section */}
      <CSRContent>
        {pillars.map(pillar => (
          <PillarCard key={pillar.id}>
            <PillarImage src={pillar.img} alt={pillar.title} />
            <Overlay />
            <PillarContent>
              <h2>{pillar.title}</h2>
              <p>{pillar.description.split('\n').map((line, index) => (
                <span key={index}>{line}<br /></span>
              ))}</p>
            </PillarContent>
          </PillarCard>
        ))}
      </CSRContent>
    </CSRContainer>
  );
};

export default CSRFrameWork;

/* Styled Components */
const CSRContainer = styled.div`
  width: 100%;
  background-color: #0b0c10;
  box-sizing: border-box;
`;

const CSRHeader = styled.div`
  text-align: left;
  background-color: #120D17;
  width: 100vw;
  padding: 30px 20px;
  
  h1 {
    font-size: 48px;
    font-weight: 500;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 680px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 36px;
      max-width: 100%;
    }
  }
`;

const CSRContent = styled.div`
  display: flex;
  gap: 0;
  flex-wrap: wrap;
  padding: 20px;
`;

const PillarCard = styled.div`
  position: relative;
  flex: 1;
  max-width: 24%;
  overflow: hidden;
  border: 2px solid white;
  cursor: pointer;

  &:hover {
    .pillar-content {
      top: 20px;
      transition: top 0.3s ease;
    }
  }

  @media (max-width: 768px) {
    max-width: 48%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const PillarImage = styled.img`
  width: 100%;
  height: 640px;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const PillarContent = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 2;
  color: white;
  transition: top 0.3s ease;

  h2 {
    font-size: 40px;
    line-height: 40px;
    margin: 0;
    color: #FFFFFF;
    padding-bottom: 40px;
  }

  p {
    font-size: 20px;
    line-height: 23.46px;
    margin: 0;
    color: #FFFFFF;
    padding-bottom: 10px;
    display: none; /* Hide description initially */
  }

  /* On hover, show the description */
  ${PillarCard}:hover & p {
    display: block;
  }

  ${PillarCard}:hover & {
    top: 50px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }
  }
`;
