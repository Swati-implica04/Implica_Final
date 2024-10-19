import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/images/tagLine.jpg";
import logoImplica from "../assets/images/newlogo with short size.png";

const BannerContainer = styled.div`
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 264px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  color: white;
  max-width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); 
  z-index: 1;
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  max-width: 1100px;
  // font-family: "Houschka Rounded";
  font-size: 36px;
  font-weight: 500;
  line-height: 44px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: 320px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const LogoImage = styled.img`
  width: 123.55px;
  height: auto;
  display: inline-block;
  vertical-align: middle;
  margin-right: 11px;

  @media (max-width: 768px) {
    width: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
  }

  @media (max-width: 320px) {
    width: 70px;
  }
`;

const StrongText = styled.span`
  color: white;
  font-weight: bold;
  // font-family: "Houschka Rounded";
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: 320px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <Overlay />
      <BannerContent>
        <LogoImage src={logoImplica} alt="Implica Logo" />
        empowers companies to{" "}
        <StrongText>build, maintain, and operate technology</StrongText>{" "}
        on a global scale, driving transformation through innovation and
        ensuring smooth international transitions.
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
