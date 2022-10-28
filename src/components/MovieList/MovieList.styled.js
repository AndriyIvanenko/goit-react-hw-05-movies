import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Li = styled.li`
  margin-bottom: 2px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  color: blue;

  &:hover {
    text-decoration: underline;
  }
`;
