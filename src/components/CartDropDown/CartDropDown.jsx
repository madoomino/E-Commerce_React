import classes from "./CartDropDown.module.scss";
import Button from "../Button/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className={classes["cart-dropdown-container"]}>
      <div className={classes["cart-items"]}>
        {cartItems.map((item) => (
          <CartItem {...item} key={item.id} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};
export default CartDropDown;
