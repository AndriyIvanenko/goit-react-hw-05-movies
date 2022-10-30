import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './Form.styled';

export const SearchForm = ({ onFormSubmit }) => {
  console.log('FORM');

  const [searchRequest, setSearchRequest] = useState('');

  const inputChangeHandler = evt => {
    setSearchRequest(evt.currentTarget.value);
  };

  const formSubmitHandler = evt => {
    evt.preventDefault();
    onFormSubmit(searchRequest);
    setSearchRequest('');
  };

  return (
    <Form onSubmit={formSubmitHandler}>
      <label htmlFor="searchRequest"></label>
      <Input
        type="text"
        autoComplete="off"
        name="searchRequest"
        value={searchRequest}
        onChange={inputChangeHandler}
      />
      <Button type="submit">search</Button>
    </Form>
  );
};

SearchForm.propTypes = {
  onFormSubmit: PropTypes.func,
};
