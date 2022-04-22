import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

function Navbar({ toggle }) {
  return (
    <Nav>
      <NavLink to="/">Pizza</NavLink>
      <NavIcon onClick={toggle}>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

const NavIcon = styled.div`
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  color: white;
  cursor: pointer;

  p {
    font-weight: bold;
    transform: translate(-175%, 100%);
  }
`;
const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
