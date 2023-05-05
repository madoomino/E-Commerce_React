import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 5px;
  }
`;


export const Total = styled.div`
  font-size: 22px;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 700;

  span {
    margin-right: 5px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
