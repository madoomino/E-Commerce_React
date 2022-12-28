import classes from "./ProductCard.module.scss";
import Button from "../Button/Button";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className={classes["product-card-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={classes.footer}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>{price}</span>
      </div>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  );
};
export default ProductCard;
