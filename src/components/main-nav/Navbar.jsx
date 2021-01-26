import React from 'react';
import styled from "styled-components";

const NavStyles = styled.nav`
  padding: 2rem;
  background-color: #6a6ad1;
  /* grid-column: 1 / 3;
  grid-row: 2 / 3; */
  grid-area: nav;
`;

const Navbar = () => {
  return (
    <NavStyles>
      <ul>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
      </ul>
    </NavStyles>
  )
}

export default Navbar
