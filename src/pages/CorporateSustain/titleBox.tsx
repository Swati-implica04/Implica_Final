import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  // left: 80px;
  transform: translateY(-50%);
  background-color: white;
  padding: 40px;
  max-width: 500px;
`

const HeaderText = styled.h1`
  color: black;
  margin: 0;
  font-family: Houschka Pro;
font-size: 64px;
font-weight: 500;
line-height: 64px;
text-align: left;

`

interface SustainabilityHeaderProps {
  backgroundImage: string;
}

export default function SustainabilityHeader({ backgroundImage }: SustainabilityHeaderProps) {
  return (
    <HeaderContainer>
      <BackgroundImage src={backgroundImage} alt="Business handshake" />
      <TextOverlay>
        <HeaderText>
          Pioneering a Greener, More Equitable Future
        </HeaderText>
      </TextOverlay>
    </HeaderContainer>
  )
}