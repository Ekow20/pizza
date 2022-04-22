import React, { useState } from "react";
import styled from "styled-components";
import imgBack from "../images/pizza-3.jpg";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const HeroContainer = styled.div`
  height: 100vh;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${imgBack});
  background-position: center;
  background-size: cover;
`;

const HeroContent = styled.div`
  height: calc(100vh-80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw-1300px) / 2);
`;

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  color: white;
  padding: 0 2rem;
  width: 650px;
  line-height: 1;
  text-transform: uppercase;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  color: white;
  background: #e31837;
  transition: 0.2s ease-out;

  &:hover {
    cursor: pointer;
    color: #000;
    background: #ffc500;
    transition: 0.2s ease-out;
  }
`;

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Best Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
