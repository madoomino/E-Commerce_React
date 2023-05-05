import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
    ${Title}: {
      text-align: center;
    }
  }
`;
