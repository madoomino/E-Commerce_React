import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

import {
  CheckoutContainer,
  Total,
} from "./Checkout.styles";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/shop");
  }

  return (
    <>
      {
        cartItems.length ? (<CheckoutContainer>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>) : (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "60vh" }}>
          <h1 style={{ textAlign: "center" }}>No items in cart</h1> 
          <button onClick={clickHandler} style={{all: "unset", cursor:"pointer", backgroundColor:"black",color:"white",display: "flex", justifyContent: "center", alignItems: "center", width: "5rem", height: "1.25rem", padding: "1rem 2rem", whiteSpace: "nowrap" }}>Get back to shop</button>
        </div>
        )
      }

    </>
  )
};

export default Checkout;
