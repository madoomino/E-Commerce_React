import { useDispatch, useSelector } from "react-redux";
import Icon from "../../assets/shopping-bag.svg";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { CartIconContainer, Img, ItemCount } from "./CartIcon.styles";
const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const setIsCartOpenHandler = () => dispatch(setIsCartOpen());
  return (
    <CartIconContainer onClick={setIsCartOpenHandler}>
      <Img src={Icon} alt="shopping cart" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
