import React from 'react';
import styled from "styled-components";

const HeaderStyles = styled.header`
  padding: 2rem;
  background-color: pink;
  /* grid-column: 1 / -1; */
  grid-area: header;
`;

const Header = () => {
  return (
    <HeaderStyles>
      The Header
    </HeaderStyles>
  )
}

export default Header
