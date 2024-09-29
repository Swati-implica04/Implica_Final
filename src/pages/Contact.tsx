import React from 'react'
import styled from 'styled-components'
import IGC from './IgcwayContact'
import FORM from './FormDesign'

const Container = styled.div`
  background-color: #000000;
  color: #FFFFFF;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0;
  margin-bottom: 1rem;
  padding-top: 100px;
  line-height: 1.2;
  text-align: left;
  color: #FFFFFF;

  @media (min-width: 768px) {
    font-size: 3rem;
    padding-left: 2rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
  margin-bottom: 2rem;
  padding-top: 1rem;
  color: #FFFFFF;

  @media (min-width: 768px) {
    font-size: 1.375rem;
    padding-left: 2rem;
  }
`

const ServiceBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding-left: 2rem;
  }
`

const ServiceBox = styled.div`
  width: 100%;
  max-width: 384px;
  height: 160px;
  background-color: #111111;
  border: 1px solid #C10682;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    border-color: #7B0B98;
  }
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 24px;
  height: 24px;
  margin-bottom: 1rem;
  cursor: pointer;

  &:checked {
    accent-color: #C10682;
  }
`

const ServiceName = styled.p`
  font-size: 1.25rem;
  margin: 0;
  text-align: center;
`

export default function ContactPage() {
  return (
    <Container>
      <Title>What's on your mind?</Title>
      <Subtitle>We would love to hear from you</Subtitle>
      <ServiceBoxContainer>
        {[1, 2, 3].map((index) => (
          <ServiceBox key={index}>
            <Checkbox />
            <ServiceName>Name of Service</ServiceName>
          </ServiceBox>
        ))}
      </ServiceBoxContainer>
      <FORM />
      <IGC />
    </Container>
  )
}