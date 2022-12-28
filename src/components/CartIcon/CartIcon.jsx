import { useContext } from "react";
import Icon from "../../assets/shopping-bag.svg";
import { ShowCartContext } from "../../contexts/ShowCart";
import classes from "./CartIcon.module.scss";
const CartIcon = () => {
  const { toggleCart } = useContext(ShowCartContext);

  return (
    <div className={classes["cart-icon-container"]} onClick={toggleCart}>
      <img
        src={Icon}
        alt="shopping cart"
        className={classes["shopping-icon"]}
      />
      <span className={classes["item-count"]}>0</span>
    </div>
  );
};
export default CartIcon;
