import styled from "styled-components";
import { BaseButton, GoogleSignInButton, InvertedButton } from "../Button/Button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 80%;
  max-width: 400px;
  height: auto;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: 500px;
  } 
`;


export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 100%;
  max-height: calc(70vh - 100px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`;