import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCartItems, selectIsCartOpen } from "../../store/cart/cart.selector";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropDown.styles";
import { useRef } from "react";
import { useEffect } from "react";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setIsCartOpen(false));
    navigate("/checkout");
  };



  return (
    <>
      {
        isCartOpen && (<CartDropdownContainer>
          <CartItems>
            {cartItems.length ? (
              cartItems.map((item) => <CartItem key={item.id} {...item} />)
            ) : (
              <EmptyMessage>Your cart is empty</EmptyMessage>
            )}
          </CartItems>
          <Button onClick={handleClick}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>)
      }
    </>
  )

};

export default CartDropdown;
