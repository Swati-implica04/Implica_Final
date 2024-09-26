import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
  max-width: 1280px;
  width: 100vw;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`

const FormContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 64px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftColumn = styled.div`
  flex: 1;
`

const RightColumn = styled.div`
  flex: 1;
`

const Title = styled.h1`
  font-size: 64px;
  font-weight: normal;
  margin: 0 0 16px 0;
  font-weight: 500;
  line-height: 64px;
  text-align: left;
  color: #FFFFFF;
`

const Subtitle = styled.p`
  font-size: 22px;
  color: #FFFFFF;
  margin: 0 0 48px 0;
`

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const CheckboxItem = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  font-size: 18px;
  color: #FFFFFF;
  cursor: pointer;
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 24px;
  height: 24px;
  margin-top: 4px;
  accent-color: #C10682;
  cursor: pointer;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const InputRow = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 8px 0;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #FFFFFF;
  color: #FFFFFF;
  font-size: 16px;

  &::placeholder {
    color: #FFFFFF;
  }

  &:focus {
    outline: none;
    border-bottom-color: #C10682;
  }
`

const SubmitButton = styled.button`
  width: 180px;
  padding: 16px;
  margin-top: 48px;
  background-color: #FFFFFF;
  color: #000000;
  border: none;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #C10682;
    color: #FFFFFF;
  }
`

export default function ContactForm() {
  return (
    <FormContainer>
      <FormContent>
        <LeftColumn>
          <Title>What's on your mind?</Title>
          <Subtitle>We would love to hear from you</Subtitle>
          <CheckboxGroup>
            <CheckboxItem>
              <Checkbox />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </CheckboxItem>
            <CheckboxItem>
              <Checkbox />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </CheckboxItem>
          </CheckboxGroup>
        </LeftColumn>
        <RightColumn>
          <InputGroup>
            <InputRow>
              <Input placeholder="Placeholder text*" />
              <Input placeholder="Placeholder text*" />
            </InputRow>
            <InputRow>
              <Input placeholder="Placeholder text*" />
              <Input placeholder="Placeholder text*" />
            </InputRow>
            <Input placeholder="Placeholder text*" />
            <Input placeholder="Placeholder text*" />
            <Input placeholder="Placeholder text*" />
          </InputGroup>
          <SubmitButton>SUBMIT</SubmitButton>
        </RightColumn>
      </FormContent>
    </FormContainer>
  )
}