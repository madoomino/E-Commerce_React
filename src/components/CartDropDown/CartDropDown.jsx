import classes from "./CartDropDown.module.scss";
import Button from "../Button/Button";

const CartDropDown = () => {
  return (
    <div className={classes["cart-dropdown-container"]}>
      <div className={classes["cart-item"]} />
      <Button>Go to checkout</Button>
    </div>
  );
};
export default CartDropDown;
