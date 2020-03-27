import styled from 'styled-components';
import { StyledTitle } from '../Styles/title';
export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const FoodLabel = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
  border-radius: 7px;
`;

export const Food = styled(StyledTitle)`
  height: 100px;
  padding: 10px;
  font-size: 20px;
  background-image: ${props => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  margin-top: 5px;
  border-radius: 7px;
  box-shadow: 0px 0px 10px 0px grey;
  transition: 0.15s linear;
  &:hover {
    cursor: pointer;
    filter: contrast(100%);
    margin-top: 0px;
    margin-bottom: 5px;
    box-shadow: 0px 5px 10px 0px grey;
  }
`;
