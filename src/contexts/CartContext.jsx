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

const cartItemsTotal = (cartItems) =>
  cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

const cartItemsCount = (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

const increaseItemQuantity = (cartItems, itemToIncrease) =>
  cartItems.map((item) =>
    item.id === itemToIncrease.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );

const deleteItem = (cartItems, itemToDelete) =>
  cartItems.filter((item) => item.id !== itemToDelete.id);

const decreaseItemQuantity = (cartItems, itemToDecrease) => {
  const targetedItem = cartItems.find((item) => item.id === itemToDecrease.id);
  if (targetedItem.quantity <= 1) {
    return deleteItem(cartItems, itemToDecrease);
  }

  return cartItems.map((item) =>
    item.id === itemToDecrease.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
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
  const [cartTotal, setCartTotal] = useState(0);

  const deleteItemFromCart = (item) => {
    setCartItems((prevState) => deleteItem(prevState, item));
  };
  const increaseQuantity = (item) => {
    setCartItems((prevState) => increaseItemQuantity(prevState, item));
  };
  const decreaseQuantity = (item) =>
    setCartItems((prevState) => decreaseItemQuantity(prevState, item));

  const addItemToCart = (item) => {
    setCartItems(addCartItem(cartItems, item));
  };
  const toggleCart = () => setIsCartOpen((prevState) => !prevState);

  useEffect(() => {
    setCartCount(cartItemsCount(cartItems));
    setCartTotal(cartItemsTotal(cartItems));
  }, [cartItems]);

  const value = {
    isCartOpen,
    cartItems,
    cartCount,
    cartTotal,
    toggleCart,
    addItemToCart,
    setCartItems,
    increaseQuantity,
    decreaseQuantity,
    deleteItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export default CartProvider;
