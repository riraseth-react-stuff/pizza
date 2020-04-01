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
import OrderDialog from './Order/OrderDialog';
import { useOrderDialog } from './Hooks/useOrderDialog';

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  const orderDialog = useOrderDialog();

  useTitle({ ...openFood, ...orders });
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <OrderDialog {...orderDialog} {...orders}></OrderDialog>
      <FoodDialog {...openFood} {...orders}></FoodDialog>
      <Navbar {...auth}></Navbar>
      <Order {...orders} {...openFood} {...auth} {...orderDialog}></Order>
      <Banner></Banner>
      <Menu {...openFood}></Menu>
    </React.Fragment>
  );
}

export default App;
