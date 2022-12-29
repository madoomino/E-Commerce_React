import classes from "./ProductCard.module.scss";
import Button from "../Button/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const clickHandler = () => {
    addItemToCart(product);
  };
  return (
    <div className={classes["product-card-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={classes.footer}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>{price}</span>
      </div>
      <Button buttonType="inverted" onClick={clickHandler}>
        Add to card
      </Button>
    </div>
  );
};
export default ProductCard;
