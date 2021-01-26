import React from 'react';
import styled from "styled-components";

const FooterStyles = styled.footer`
  padding: 2rem;
  background-color: #a3be8c;
  /* grid-column: 1 / 5; */
  grid-area: footer;
`;

const Footer = () => {
  return (
    <FooterStyles>
      The Footer
    </FooterStyles>
  )
}

export default Footer
