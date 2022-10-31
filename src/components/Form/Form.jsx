import PropTypes from 'prop-types';
import { Form, Input, Button } from './Form.styled';

export const SearchForm = ({ onFormSubmit }) => {
  //   console.log('FORM');

  const formSubmitHandler = evt => {
    evt.preventDefault();
    const requestForm = evt.currentTarget;
    onFormSubmit(requestForm.elements.searchRequest.value);
    requestForm.reset();
  };

  return (
    <Form onSubmit={formSubmitHandler}>
      <label htmlFor="searchRequest"></label>
      <Input type="text" autoComplete="off" name="searchRequest" />
      <Button type="submit">search</Button>
    </Form>
  );
};

SearchForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
