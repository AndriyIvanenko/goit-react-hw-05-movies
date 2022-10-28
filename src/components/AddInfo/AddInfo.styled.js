import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AddInfo = styled.div`
  padding-top: 16px;
  margin-bottom: 20px;
  border-top: 2px solid lightgrey;
`;

export const Ul = styled.ul`
  margin-top: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  list-style: none;
  border-bottom: 2px solid lightgrey;
`;

export const Li = styled.li`
  margin-bottom: 5px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  color: blue;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
