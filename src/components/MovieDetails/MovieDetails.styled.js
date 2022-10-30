import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px;
  margin-bottom: 20px;
  padding-right: 10px;

  /* border: 1px solid #cf2828; */
  border: none;
  border-radius: 3px;
  font-size: 18px;
  font-weight: 500;
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
  max-width: 300px;
  height: 100%;
  margin-right: 20px;
`;

export const Overview = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const H2 = styled.h2`
  margin-bottom: 5px;
  font-size: 28px;
`;

export const Score = styled.p`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 500;
`;

export const H4 = styled.h4`
  margin-bottom: 5px;
  font-size: 20px;
`;

export const Genres = styled.p`
  font-size: 16px;
`;
