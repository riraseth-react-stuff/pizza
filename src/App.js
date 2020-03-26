import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './Navbar/Navbar';
const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}

h1, h2, h3 {
  font-family: 'Righteous', cursive;
}

`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <Navbar></Navbar>
      <h1>Slice Line</h1>
      <div className="">hello pizza</div>
    </React.Fragment>
  );
}

export default App;
