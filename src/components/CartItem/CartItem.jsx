import { CartItemContainer, ItemDetails } from "./CartItem.styles";

const CartItem = ({ name, imageUrl, quantity, price }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
