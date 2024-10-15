import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh; /* Full height of viewport */
  padding: 32px 5%; /* Adjust padding */
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-sizing: border-box; /* Ensure padding is included in total size */
  overflow: hidden; /* Prevent scrolling */
  max-width: 1200px; /* Limit maximum width */
  margin: 0 auto; /* Center the container */
`;

const Title = styled.h1`
  font-size: 48px; /* Smaller font for better fit */
  font-weight: 500;
  line-height: 1.2;
  text-align: left;
  color: #FFFFFF;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 36px;
    text-align: center;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  justify-content: space-between; /* Ensure even spacing */
  flex-grow: 1; /* Ensure it expands to fill available space */
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MapContainer = styled.div`
  flex: 1;
  min-width: 300px; /* Minimum width for map */
  height: 100%; /* Ensure it fills available height */
  background-color: #D9D9D9;

  @media (max-width: 768px) {
    height: 320px; /* Reduce height for smaller screens */
  }
`;

// Contact section styles
const ContactContainer = styled.div`
  flex: 1;
  background-color: #111;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 32px;
  max-width: 500px; /* Limits width */
  min-width: 300px; /* Minimum size for responsiveness */
  height: 100%; /* Ensure it fills the available height */

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const ContactTitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContactItem = styled.p`
  font-size: 1rem;
  line-height: 1.75rem;
  margin: 0;
`;

export default function IGCOffices() {
  return (
    <Container>
      <Title>IGC Contact</Title>
      <Content>
        <ContactContainer>
          <ContactTitle>IGC Contact</ContactTitle>
          <ContactInfo>
            <ContactItem>
              Headquarters Address: Implica Global Corporation OÜ, Ahtri tn 12, Kesklinna linnaosa, 15551 Tallinn, Harju maakond, Estonia
            </ContactItem>
            <ContactItem>Phone Number: +393336893675</ContactItem>
            <ContactItem>Email Address: info@implicaglobalcorp.com</ContactItem>
            <ContactItem>Business Hours: Monday to Sunday: 24/7</ContactItem>
          </ContactInfo>
        </ContactContainer>

        {/* Map container */}
        <MapContainer />
      </Content>
    </Container>
  );
}
