// import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px;
  margin-bottom: 20px;
  padding-right: 10px;

  /* border: 1px solid #cf2828; */
  border: none;
  border-radius: 3px;
  font-weight: 600;
  background-color: #dfdfdf;

  &:hover {
    background-color: #fc3838;
    color: #fff;
    cursor: pointer;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  max-width: 200px;
  height: 100%;
  margin-right: 20px;
`;

export const Overview = styled.p`
  font-size: 12px;
  margin-bottom: 20px;
`;

export const H2 = styled.h2`
  margin-bottom: 5px;
`;

export const Score = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 500;
`;

export const H4 = styled.h4`
  margin-bottom: 5px;
`;

export const Genres = styled.p`
  font-size: 12px;
`;

// export const AddInfo = styled.div`
//   padding-top: 16px;
//   margin-bottom: 20px;
//   border-top: 2px solid lightgrey;
// `;

// export const Ul = styled.ul`
//   margin-top: 0;
//   padding-top: 10px;
//   padding-bottom: 10px;
//   list-style: none;
//   border-bottom: 2px solid lightgrey;
// `;

// export const Li = styled.li`
//   margin-bottom: 5px;
// `;

// export const StyledLink = styled(Link)`
//   text-decoration: none;
//   font-size: 14px;
//   font-weight: 500;
//   color: blue;

//   &:hover {
//     cursor: pointer;
//     text-decoration: underline;
//   }
// `;
