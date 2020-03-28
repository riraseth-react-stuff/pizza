import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import Menu from './Menu/Menu';
import { GlobalStyle } from './Styles/GlobalStyle';
import FoodDialog from './FoodDialog/FoodDialog';
function App() {
  const [openFood, setOpenFood] = useState();

  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood}></FoodDialog>
      <Navbar></Navbar>
      <Banner></Banner>
      <Menu setOpenFood={setOpenFood}></Menu>
    </React.Fragment>
  );
}

export default App;
