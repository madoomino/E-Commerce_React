import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import {
  Footer,
  Name,
  Price,
  ProductCartContainer,
} from "./ProductCard.styles";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const clickHandler = () => {
    addItemToCart(product);
  };

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={clickHandler}>
        Add to card
      </Button>
    </ProductCartContainer>
  );
};
export default ProductCard;
