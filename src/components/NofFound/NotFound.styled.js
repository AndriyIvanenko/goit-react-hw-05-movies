import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  color: blue;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const P = styled.p`
  font-size: 26px;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  font-size: 30px;
  font-weight: 700;
`;
