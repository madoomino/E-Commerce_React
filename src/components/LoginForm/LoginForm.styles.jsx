import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the form vertically */
  max-width: 380px;
  margin: 0 auto; /* Center the form horizontally */
  padding: 16px;

  h2 {
    margin: 10px 0;
  }

  @media (max-width: 480px) {
    /* Styles for small screens */
    width: 100%; /* Take up full width */
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between; /* Spread the buttons horizontally */

  @media (max-width: 480px) {
    /* Styles for small screens */
    flex-direction: column; /* Stack the buttons vertically */
    gap: 8px; /* Add spacing between buttons */
  }
`;
