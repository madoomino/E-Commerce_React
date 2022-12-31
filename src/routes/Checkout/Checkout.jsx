import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

import classes from "./Checkout.module.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className={classes["checkout-container"]}>
      <div className={classes["checkout-header"]}>
        <div className={classes["header-block"]}>
          <span>Product</span>
        </div>
        <div className={classes["header-block"]}>
          <span>Description</span>
        </div>
        <div className={classes["header-block"]}>
          <span>Quantity</span>
        </div>
        <div className={classes["header-block"]}>
          <span>Price</span>
        </div>
        <div className={classes["header-block"]}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className={classes["total"]}>Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
