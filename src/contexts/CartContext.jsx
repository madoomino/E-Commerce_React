import { createContext, useEffect, useReducer, useState } from "react";

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

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    case "CHANGE_CART_DROPDOWN_STATE":
      return { ...state, isCartOpen: !state.isCartOpen };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const CartProvider = ({ children }) => {
  const [{ cartItems, cartTotal, cartCount, isCartOpen }, dispatchCart] =
    useReducer(cartReducer, INITIAL_STATE);

  const deleteItemFromCart = (item) => {
    const newCartItems = deleteItem(cartItems, item);
    updateCartItems(newCartItems);
  };
  const increaseQuantity = (item) => {
    const newCartItems = increaseItemQuantity(cartItems, item);
    updateCartItems(newCartItems);
  };
  const decreaseQuantity = (item) => {
    const newCartItems = decreaseItemQuantity(cartItems, item);
    updateCartItems(newCartItems);
  };
  const addItemToCart = (item) => {
    const newCartItems = addCartItem(cartItems, item);
    updateCartItems(newCartItems);
  };
  const toggleCart = () => {
    dispatchCart({
      type: "CHANGE_CART_DROPDOWN_STATE",
    });
  };

  const updateCartItems = (newCartItems) => {
    const newCartItemsCount = cartItemsCount(newCartItems);
    const newCartItemsTotal = cartItemsTotal(newCartItems);

    dispatchCart({
      type: "SET_CART_ITEMS",
      payload: {
        cartItems: newCartItems,
        cartTotal: newCartItemsTotal,
        cartCount: newCartItemsCount,
      },
    });
  };

  const value = {
    isCartOpen,
    cartItems,
    cartCount,
    cartTotal,
    toggleCart,
    addItemToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export default CartProvider;
