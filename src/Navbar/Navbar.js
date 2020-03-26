import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/colors';
import { StyledTitle } from '../Styles/title';

const StyledNavbar = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  top: 0;
`;

const Logo = styled(StyledTitle)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo>
        Sliceline
        <span role="img" aria-label="pizza">
          🍕
        </span>
      </Logo>
    </StyledNavbar>
  );
};

export default Navbar;
