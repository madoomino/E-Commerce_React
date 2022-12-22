import classes from "./FormInput.module.scss";
const FormInput = ({ labelOptions, inputOptions }) => {
  return (
    <div className={classes.group}>
      <input {...inputOptions} className={classes["form-input"]} />
      {labelOptions.label ? (
        <label
          htmlFor={labelOptions.htmlFor}
          className={`${inputOptions.value.length ? classes.shrink : ""} ${
            classes["form-input-label"]
          }`}
        >
          {labelOptions.label}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;
