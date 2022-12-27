import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/crown.svg";
import classes from "./Navigation.module.scss";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <>
      <nav className={classes["navigation"]}>
        <Link to="/" className={classes["logo-container"]}>
          <img src={Logo} className={classes["logo"]} />
        </Link>
        <ul className={classes["nav-links-container"]}>
          <Link to="/shop">Shop</Link>
          <Link to="/login">Login</Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
