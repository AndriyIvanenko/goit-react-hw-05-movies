import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid grey;
  border-radius: 4px;
  width: fit-content;
  overflow: hidden;
`;

export const Input = styled.input`
  border: none;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: #dfdfdf;
  height: 28px;

  font-size: 18px;

  &:hover {
    cursor: pointer;
    background-color: #fc3838;
    color: #fff;
  }
`;
