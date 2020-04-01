import React from 'react';
import Navbar from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import Menu from './Menu/Menu';
import { GlobalStyle } from './Styles/GlobalStyle';
import FoodDialog from './FoodDialog/FoodDialog';
import Order from './Order/Order';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';
import useAuthentication from './Hooks/useAuthentication';

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  useTitle({ ...openFood, ...orders });
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <FoodDialog {...openFood} {...orders}></FoodDialog>
      <Navbar {...auth}></Navbar>
      <Order {...orders} {...openFood} {...auth}></Order>
      <Banner></Banner>
      <Menu {...openFood}></Menu>
    </React.Fragment>
  );
}

export default App;
