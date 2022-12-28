import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/crown.svg";
import classes from "./Navigation.module.scss";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/Cart-Icon/CartIcon";
import CartDropDown from "../../components/CartDropDown/CartDropDown";
import { ShowCartContext } from "../../contexts/ShowCart";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { showCart } = useContext(ShowCartContext);

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
        {showCart && <CartDropDown />}
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
