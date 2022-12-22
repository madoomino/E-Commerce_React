import classes from "./FormInput.module.scss";
const FormInput = ({ label, htmlFor, inputOptions }) => {
  return (
    <div className={classes.group}>
      <input {...inputOptions} className={classes["form-input"]} />
      {label ? (
        <label
          htmlFor={htmlFor}
          className={`${inputOptions.value.length ? classes.shrink : ""} ${
            classes["form-input-label"]
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;
