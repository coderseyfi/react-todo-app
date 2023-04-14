import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.module.css';

import styled from 'styled-components';

const FormControl = styled.div`
  margin: 0.5rem 0;

   & label {
    font-weight: bold;
    display: block;
    margin-bottom: 1rem;
    font-size:30px;
    color:gray;
    text-align:center;
   }
  
  & input {
    display: block;
    width: 100%;
    border: 2px solid ${props => props.invalid ? "red" : "#ccc"};
    border-radius:10px;
    font: inherit;
    line-height: 1.5rem;
    padding: 6px;
  }
  
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
  
  &.invalid input {
    border-color: red;
    background: #fff;
  }
  &.invalid label {
    color: red;
  }
`;



const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return 1;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>To do</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
