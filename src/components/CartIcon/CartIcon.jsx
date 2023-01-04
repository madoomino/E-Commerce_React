import { useContext } from "react";
import Icon from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/CartContext";
import { CartIconContainer, Img, ItemCount } from "./CartIcon.styles";
const CartIcon = () => {
  const { toggleCart, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={toggleCart}>
      <Img src={Icon} alt="shopping cart" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
