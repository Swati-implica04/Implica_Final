import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 1280px;
  width: 100vw;
  margin: 0 auto;
  padding-top: 100px;
  font-family: Arial, sans-serif;
`;

const FormContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 64px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: normal;
  margin: 0 0 16px 0;
  font-weight: 500;
  line-height: 64px;
  text-align: left;
  color: #FFFFFF;
`;

const Subtitle = styled.p`
  font-size: 22px;
  color: #FFFFFF;
  margin: 0 0 48px 0;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  font-size: 18px;
  color: #FFFFFF;
  cursor: pointer;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 24px;
  height: 24px;
  margin-top: 4px;
  accent-color: #C10682;
  cursor: pointer;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

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
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px 0;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #FFFFFF;
  color: #FFFFFF;
  font-size: 16px;
  min-height: 100px;

  &::placeholder {
    color: #FFFFFF;
  }

  &:focus {
    outline: none;
    border-bottom-color: #C10682;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 8px 0;
  background-color: black;
  border: none;
  border-bottom: 1px solid #FFFFFF;
  color: #FFFFFF;
  font-size: 16px;

  &:focus {
    outline: none;
    border-bottom-color: #C10682;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 24px;
`;

const RadioItem = styled.label`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 18px;
  color: #FFFFFF;
  cursor: pointer;
`;

const Radio = styled.input.attrs({ type: 'radio' })`
  width: 24px;
  height: 24px;
  accent-color: #C10682;
  cursor: pointer;
`;

const FileUpload = styled.input.attrs({ type: 'file' })`
  margin-top: 24px;
  color: #FFFFFF;
`;

const SubmitButton = styled.button`
  width: 180px;
  padding: 16px;
  margin-top: 48px;
  margin-bottom: 24px;
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
`;

interface ContactFormProps {
  title?: string;
}

export default function ContactForm({ title }: ContactFormProps) {
  return (
    <FormContainer>
      <FormContent>
        <LeftColumn>
          <Title>{title || "What's on your mind?"}</Title> {/* Use the title prop */}
          <Subtitle>We would love to hear from you</Subtitle>
          <CheckboxGroup>
            <CheckboxItem>
              <Checkbox />
              I’m interested in learning more about your services.
            </CheckboxItem>
            <CheckboxItem>
              <Checkbox />
              I’m looking to collaborate or partner with Implica Global Co.
            </CheckboxItem>
            <CheckboxItem>
              <Checkbox />
              I have a technical question or need support.
            </CheckboxItem>
            <CheckboxItem>
              <Checkbox />
              I’m a media or press representative.
            </CheckboxItem>
            <CheckboxItem>
              <Checkbox />
              I’m interested in career opportunities at Implica Global.
            </CheckboxItem>
            <CheckboxItem>
              <Checkbox />
              I want to learn more about Implica Ventures or start-up programs.
            </CheckboxItem>
            <CheckboxItem>
              <Checkbox />
              I want to support or learn more about the Implica Foundation.
            </CheckboxItem>
          </CheckboxGroup>
        </LeftColumn>
        <RightColumn>
          <InputGroup>
            <InputRow>
              <Input placeholder="First Name*" />
              <Input placeholder="Last Name*" />
            </InputRow>
            <InputRow>
              <Input placeholder="Email Address*" />
              <Input placeholder="Phone Number (Optional)" />
            </InputRow>
            <Input placeholder="Company Name (Optional)" />
            <Select>
              <option value="">Department to Contact*</option>
              <option value="general">General Inquiry</option>
              <option value="sales">Sales & Business Development</option>
              <option value="support">Customer Support</option>
              <option value="hr">Human Resources</option>
              <option value="media">Media Relations</option>
              <option value="ventures">Implica Ventures</option>
              <option value="foundation">Implica Foundation</option>
              <option value="capital">Implica Capital</option>
              <option value="partnership">Collaboration & Partnership</option>
              <option value="careers">Careers</option>
            </Select>
            <Input placeholder="Subject*" />
            <TextArea placeholder="Message*" />
            <RadioGroup>
              <RadioItem>
                <Radio name="contactMethod" /> Email
              </RadioItem>
              <RadioItem>
                <Radio name="contactMethod" /> Phone
              </RadioItem>
            </RadioGroup>
            <Select>
              <option value="">How Did You Hear About Us?</option>
              <option value="internet">Internet Search</option>
              <option value="social">Social Media</option>
              <option value="referral">Referral</option>
              <option value="event">Event/Conference</option>
              <option value="press">Press/Media</option>
              <option value="other">Other</option>
            </Select>
            <FileUpload />
          </InputGroup>
          <SubmitButton>SUBMIT</SubmitButton>
        </RightColumn>
      </FormContent>
    </FormContainer>
  );
}
