import React from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../Styles/title';
import { pizzaRed } from '../Styles/colors';
const StyledQuantityInput = styled.input`
  font-size: 18px;
  width: 24px;
  text-align: center;
  border: none;
  outline: none;
`;

const IncrementContainer = styled(StyledTitle)`
  display: flex;
  height: 24px;
`;

const IncrementButton = styled.div`
  width: 23px;
  color: ${pizzaRed};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  border: 1px solid ${pizzaRed};
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.5; 
    pointer-events: none; 
    filter: grayscale(100);
    `}
  &:hover {
    background-color: #ffe3e3;
  }
`;

const QuantityInput = ({ quantity }) => {
  return (
    <IncrementContainer>
      <div>Quantity:</div>
      <IncrementButton
        onClick={() => {
          quantity.setValue(quantity.value - 1);
        }}
        disabled={quantity.value === 1}
      >
        -
      </IncrementButton>
      <StyledQuantityInput {...quantity}></StyledQuantityInput>
      <IncrementButton
        onClick={() => {
          quantity.setValue(quantity.value + 1);
        }}
      >
        +
      </IncrementButton>
    </IncrementContainer>
  );
};

export default QuantityInput;
