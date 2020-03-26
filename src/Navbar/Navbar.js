import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/colors';
import { StyledTitle } from '../Styles/title';

const StyledNavbar = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
`;

const Logo = styled(StyledTitle)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo>Sliceline 🍕</Logo>
    </StyledNavbar>
  );
};

export default Navbar;
