import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  margin: 0 auto; /* Center the form horizontally */
  padding: 16px;

  h2 {
    margin: 10px 0;
    text-align: center;
  }
  span {
    text-align: center;
  }

  @media (max-width: 480px) {
    /* Styles for small screens */
    width: 100%; /* Take up full width */
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 480px) {
    /* Styles for small screens */
    flex-direction: column; /* Stack the buttons vertically */
    gap: 8px; /* Add spacing between buttons */
  }
`;
