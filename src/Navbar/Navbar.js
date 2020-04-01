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
  z-index: 100;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(StyledTitle)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`;

const UserStatus = styled.div`
  color: white;
  font-size: 12px;
  margin-right: 30px;
`;

const LoginButton = styled.span`
  cursor: pointer;
`;

const Navbar = ({ login, loggedIn, logout }) => {
  return (
    <StyledNavbar>
      <Logo>
        Sliceline
        <span role="img" aria-label="pizza">
          🍕
        </span>
      </Logo>
      <UserStatus>
        {loggedIn !== 'loading' ? (
          <>
            <span role="img" aria-label="user">
              👤
            </span>
            {loggedIn ? 'Logged in.' : ''}
            {loggedIn ? (
              <LoginButton onClick={logout}> Log out </LoginButton>
            ) : (
              <LoginButton onClick={login}> Log in / Sign up </LoginButton>
            )}
          </>
        ) : (
          'loading...'
        )}
      </UserStatus>
    </StyledNavbar>
  );
};

export default Navbar;
