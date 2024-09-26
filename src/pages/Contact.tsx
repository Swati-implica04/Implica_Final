import React from 'react'
import styled from 'styled-components'
import IGC from './IgcwayContact'
import FORM from './FormDesign'

const Container = styled.div`
  background-color: #000000;
  color: #FFFFFF;
  padding: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
`

const Title = styled.h1`
  font-size: 64px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 16px;
  padding-top: 36px;
  line-height: 64px;
  text-align: left;
  padding-left: 36px;
  color: #FFFFFF;
`

const Subtitle = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 25.81px;
  margin: 0;
  margin-bottom: 64px;
  padding-top: 20px;
  padding-left: 37px;
  color: #FFFFFF;
`

const ServiceBoxContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 64px;
  align-items: center;
  padding-left: 85px;
  padding-top: 30px;
`

const ServiceBox = styled.div`
  width: 384px;
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
  margin-bottom: 16px;
  cursor: pointer;

  &:checked {
    accent-color: #C10682;
  }
`

const ServiceName = styled.p`
  font-size: 20px;
  margin: 0;
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
      <IGC />
      <FORM />
    </Container>
  )
}