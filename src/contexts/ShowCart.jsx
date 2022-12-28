import { createContext, useState } from "react";

export const ShowCartContext = createContext();

const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const value = { showCart, setShowCart };
  return (
    <ShowCartContext.Provider value={value}>
      {children}
    </ShowCartContext.Provider>
  );
};
export default CartProvider;
