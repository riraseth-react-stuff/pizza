import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';

const StyledMenu = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;

const Menu = ({ setOpenFood }) => {
  return (
    <StyledMenu>
      {/* Object.entries creates array of arrays with key value pairs
          eg. [['pizza', 'cheese'], ['pizza','pepperoni']]    
      */}
      {Object.entries(foods).map(([sectionName, foods], index) => (
        <React.Fragment key={index}>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map((food, index) => {
              return (
                <Food
                  img={food.img}
                  key={index}
                  onClick={() => setOpenFood(food)}
                >
                  <FoodLabel>{food.name}</FoodLabel>
                </Food>
              );
            })}
          </FoodGrid>
        </React.Fragment>
      ))}
    </StyledMenu>
  );
};

export default Menu;
