import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/crown.svg";
import CartDropDown from "../../components/CartDropDown/CartDropDown";
import CartIcon from "../../components/CartIcon/CartIcon";
import { CartContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import classes from "./Navigation.module.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <nav className={classes["navigation"]}>
        <Link to="/" className={classes["logo-container"]}>
          <img src={Logo} className={classes["logo"]} />
        </Link>
        <ul className={classes["nav-links-container"]}>
          <Link to="/shop">SHOP</Link>
          {currentUser ? (
            <span className={classes["nav-link"]} onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to="/login" className={classes["nav-link"]}>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </ul>
        {isCartOpen && <CartDropDown />}
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
