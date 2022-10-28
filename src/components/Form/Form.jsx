import { Form, Input, Button } from './Form.styled';

export const SearchForm = ({ submitHandler, inputHandler }) => {
  return (
    <Form onSubmit={submitHandler}>
      <label htmlFor="search"></label>
      <Input
        type="text"
        autoComplete="off"
        name="search"
        onChange={inputHandler}
      />
      <Button type="submit">search</Button>
    </Form>
  );
};
