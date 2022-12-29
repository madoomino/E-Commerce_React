import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, addedItem) => {
  // check if item exists in the cart
  const checkedItem = cartItems.find((item) => item.id === addedItem.id);

  // if item doesn't exist add it to the cart
  if (!checkedItem) {
    return [...cartItems, { ...addedItem, quantity: 1 }];
  }

  // if item exists increase its quantity by 1
  // by mapping through the cartItems and founding the targeted item

  return cartItems.map((cartItem) =>
    cartItem.id === checkedItem.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const newCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCount);
  }, [cartItems]);
  const addItemToCart = (item) => {
    setCartItems(addCartItem(cartItems, item));
  };
  const toggleCart = () => setIsCartOpen((prevState) => !prevState);
  const value = { isCartOpen, toggleCart, addItemToCart, cartItems, cartCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export default CartProvider;
