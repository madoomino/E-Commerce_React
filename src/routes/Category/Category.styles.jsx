import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;


export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
  
  @media (max-width: 767px) {
    font-size: 28px;
  }

`;
