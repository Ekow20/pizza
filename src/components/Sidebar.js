import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  width: 350px;
  height: 100%;
  z-index: 999;
  background: #ffc500;
  display: grid;
  align-items: center;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
`;
const CloseIcon = styled(FaTimes)`
  color: black;
`;

const LinksCon = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;
`;
const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.5rem;
  list-style: none;
  color: #000;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  background: #e31837;
  color: white;
  padding: 16px 64px;
  border: none;
  font-size: 1rem;
  outline: none;
  cursor: pointer;

  &:hover {
    color: #010606;
    transition: 0.2s ease-in-out;
    background: white;
  }
`;

function Sidebar({ isOpen, toggle }) {
  return (
    <Container isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <LinksCon>
        <SidebarLink to="/">Pizzas</SidebarLink>
        <SidebarLink to="/">Desserts</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </LinksCon>
      <BtnWrap>
        <Button>Order Now</Button>
      </BtnWrap>
    </Container>
  );
}

export default Sidebar;
