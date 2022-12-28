import classes from "./CartIcon.module.scss";
import Icon from "../../assets/shopping-bag.svg";
import { ShowCartContext } from "../../contexts/ShowCart";
import { useContext } from "react";
const CartIcon = () => {
  const { setShowCart } = useContext(ShowCartContext);

  const toggleCart = () => setShowCart((prevState) => !prevState);
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
