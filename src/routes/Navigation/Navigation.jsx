import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/crown.svg";
import classes from "./Navigation.module.scss";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
