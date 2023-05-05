import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
    row-gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 30px;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    column-gap: 5px;
    row-gap: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
  
  @media (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;
