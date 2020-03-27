import React from 'react';
import Navbar from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import Menu from './Menu/Menu';
import { GlobalStyle } from './Styles/GlobalStyle';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <Navbar></Navbar>
      <Banner></Banner>
      <Menu></Menu>
    </React.Fragment>
  );
}

export default App;
