import classes from "./Button.module.scss";
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...others }) => {
  return (
    <button
      {...others}
      className={`${classes["button-container"]} ${BUTTON_TYPE_CLASSES[buttonType]}`}
    >
      {children}
    </button>
  );
};
export default Button;
