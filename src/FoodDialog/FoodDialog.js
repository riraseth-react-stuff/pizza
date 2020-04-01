import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { pizzaRed } from '../Styles/colors';
import { formatPrice } from '../Data/FoodData';
import QuantityInput from './QuantityInput';
import { useQuantity } from '../Hooks/useQuantity';
import Toppings from './Toppings';
import useToppings from '../Hooks/useToppings';
import { useChoice } from '../Hooks/useChoice';
import Choices from './Choices';
const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0 40px;
  padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled.div`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${pizzaRed};
  ${({ disabled }) =>
    disabled &&
    `
    opactity: .5; 
    background-color: grey; 
    pointer-events: none; 
  `}
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${props =>
    props.img ? `background-image: url('${props.img}')` : `min-height: 75px`};
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  top: ${props => (props.img ? `100px` : `20px`)};
  font-size: 30px;
  padding: 5px 40px;
`;

const toppingPrice = 0.5;

export const getPrice = order => {
  return (
    order.quantity *
    (order.price +
      order.toppings.filter(topping => topping.checked).length * toppingPrice)
  );
};

const FoodDialogContainer = ({ openFood, setOpenFood, setOrders, orders }) => {
  const quantity = useQuantity(openFood && openFood.quantity);
  const toppings = useToppings(openFood.toppings);
  const choiceRadio = useChoice(openFood.choice);

  const close = () => {
    setOpenFood();
  };

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
    choice: choiceRadio.value
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    close();
  };

  const hasToppings = food => {
    console.log(food.section === 'Pizza');
    return food.section === 'Pizza';
  };

  return (
    <React.Fragment>
      <DialogShadow onClick={close}></DialogShadow>
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName img={openFood.img}>
            {openFood.name}
          </DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity}></QuantityInput>
          {hasToppings(openFood) && (
            <>
              <h3>Would you like toppings?</h3>
              <Toppings {...toppings}></Toppings>
            </>
          )}
          {openFood.choices && (
            <Choices choiceRadio={choiceRadio} openFood={openFood}></Choices>
          )}
        </DialogContent>
        <DialogFooter>
          <ConfirmButton
            onClick={addToOrder}
            disabled={openFood.choices && !choiceRadio.value}
          >
            Add to order: {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  );
};

const FoodDialog = props => {
  if (!props.openFood) return null;
  return <FoodDialogContainer {...props}></FoodDialogContainer>;
};

export default FoodDialog;
