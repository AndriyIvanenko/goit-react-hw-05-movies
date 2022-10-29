import { useState } from 'react';
import { Form, Input, Button } from './Form.styled';

export const SearchForm = ({ onFormSubmit }) => {
  console.log('FORM');

  const [input, setInput] = useState();

  const inputChangeHandler = evt => {
    setInput(evt.target.value);
  };

  const formSubmitHandler = evt => {
    evt.preventDefault();
    onFormSubmit(input);
    setInput('');
  };

  return (
    <Form onSubmit={formSubmitHandler}>
      <label htmlFor="search"></label>
      <Input
        type="text"
        autoComplete="off"
        name="search"
        onChange={inputChangeHandler}
      />
      <Button type="submit">search</Button>
    </Form>
  );
};
