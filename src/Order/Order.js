import React from 'react';
import styled from 'styled-components';
import {
  DialogContent,
  ConfirmButton,
  DialogFooter
} from '../FoodDialog/FoodDialog';
const StyledOrder = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 0px 0px 5px 5px grey;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
`;

const OrderItem = styled.div`
  padding: 10px 0px;
`;

const Order = ({ orders }) => {
  return (
    <StyledOrder>
      {orders.length === 0 ? (
        <OrderContent>Your order is empty</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Your order:</OrderContainer>
          {orders.map((order, index) => {
            return (
              <OrderContainer key={index}>
                <OrderItem>{order.name}</OrderItem>
              </OrderContainer>
            );
          })}
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>Checkout here</ConfirmButton>
      </DialogFooter>
    </StyledOrder>
  );
};

export default Order;
