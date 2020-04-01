import React from 'react';
import styled from 'styled-components';

const CursorPointer = `cursor: pointer`;

const RadioInput = styled.input`
  ${CursorPointer}
`;

const Label = styled.label`
  ${CursorPointer}
`;

const Choices = ({ openFood, choiceRadio }) => {
  return (
    <>
      <h3>Choose one</h3>
      {openFood.choices.map(choice => {
        return (
          <>
            <RadioInput
              type="radio"
              id={choice}
              name="choice"
              value={choice}
              checked={choiceRadio.value === choice}
              onChange={choiceRadio.onChange}
            />
            <Label for={choice}> {choice} </Label>
          </>
        );
      })}
    </>
  );
};

export default Choices;
