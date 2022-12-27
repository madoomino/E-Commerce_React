import classes from "./SignUpForm.module.scss";
import AlertComponent from "../Alert/Alert";
import { UserContext } from "../../contexts/UserContext";
import { useState, useEffect, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  signedInMessage: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword, signedInMessage } =
    formFields;

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  const { setCurrentUser } = useContext(UserContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setFormFields((prevState) => ({
        ...prevState,
        signedInMessage: "Password doesn't match",
      }));
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
      setFormFields((prevState) => ({
        ...prevState,
        signedInMessage: "Signed up successfully",
      }));
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setFormFields((prevState) => ({
          ...prevState,
          signedInMessage: "Email is already in use",
        }));
        return;
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFormFields((prevState) => ({
        ...prevState,
        signedInMessage: "",
      }));
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [signedInMessage]);
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
        {signedInMessage.length > 0 && (
          <AlertComponent
            status={`${
              signedInMessage === "Signed up successfully" ? "success" : "error"
            }`}
          >
            {signedInMessage}
          </AlertComponent>
        )}
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
