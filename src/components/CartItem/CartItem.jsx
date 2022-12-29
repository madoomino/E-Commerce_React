import classes from "./CartItem.module.scss";
const CartItem = ({ name, imageUrl, quantity, price }) => {
  return (
    <div className={classes["cart-item-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={classes["item-details"]}>
        <span className={classes["name"]}>{name}</span>
        <span className={classes["price"]}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
