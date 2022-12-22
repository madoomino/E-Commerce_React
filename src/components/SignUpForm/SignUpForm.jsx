import classes from "./SignUpForm.module.scss";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../FormInput/FormInput";

const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return;
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userDoc = await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email is already in use");
      }
      console.error(error);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  return (
    <div className={classes["sign-up-container"]}>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          labelOptions={{
            htmlFor: "displayName",
            label: "Display Name",
          }}
          inputOptions={{
            value: displayName,
            onChange: changeHandler,
            type: "text",
            name: "displayName",
            required: true,
          }}
        />
        <FormInput
          labelOptions={{
            htmlFor: "email",
            label: "Email",
          }}
          inputOptions={{
            value: email,
            onChange: changeHandler,
            type: "email",
            name: "email",
            required: true,
          }}
        />
        <FormInput
          labelOptions={{
            htmlFor: "password",
            label: "Password",
          }}
          inputOptions={{
            value: password,
            onChange: changeHandler,
            type: "password",
            name: "password",
            required: true,
          }}
        />
        <FormInput
          labelOptions={{
            htmlFor: "confirmPassword",
            label: "Confirm Password",
          }}
          inputOptions={{
            value: confirmPassword,
            onChange: changeHandler,
            type: "password",
            name: "confirmPassword",
            required: true,
          }}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
export default SignUpForm;
