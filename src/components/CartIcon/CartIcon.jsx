import { useContext } from "react";
import Icon from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/CartContext";
import classes from "./CartIcon.module.scss";
const CartIcon = () => {
  const { toggleCart, cartCount } = useContext(CartContext);

  return (
    <div className={classes["cart-icon-container"]} onClick={toggleCart}>
      <img
        src={Icon}
        alt="shopping cart"
        className={classes["shopping-icon"]}
      />
      <span className={classes["item-count"]}>{cartCount}</span>
    </div>
  );
};
export default CartIcon;
