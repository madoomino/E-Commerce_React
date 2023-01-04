import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 25px;
  height: 25px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-left: 6px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 2.5px;
`;
