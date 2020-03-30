import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import Menu from './Menu/Menu';
import { GlobalStyle } from './Styles/GlobalStyle';
import FoodDialog from './FoodDialog/FoodDialog';
import Order from './Order/Order';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <FoodDialog {...openFood} {...orders}></FoodDialog>
      <Navbar></Navbar>
      <Order {...orders}></Order>
      <Banner></Banner>
      <Menu {...openFood}></Menu>
    </React.Fragment>
  );
}

export default App;
