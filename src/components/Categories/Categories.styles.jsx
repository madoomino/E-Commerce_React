import styled from "styled-components";

export const CategoriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
