import classes from "./SignInForm.module.scss";
import FormInput from "../FormInput/FormInput";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  logInWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
const SignInForm = () => {
  const logGoogleUserPopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    signedIn: "",
  });

  const { email, password, signedIn } = formFields;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { user } = await logInWithEmailAndPassword(email, password);

      setFormFields((prevState) => ({
        ...prevState,
        signedIn: "Signed in successfully",
      }));
    } catch (error) {
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        setFormFields((prevState) => ({
          ...prevState,
          signedIn: "Signing in failed",
        }));
        return;
      }
    }
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return { ...formFields, [name]: value };
    });
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFormFields((prevState) => ({
        ...prevState,
        signedIn: "",
      }));
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [signedIn]);
  return (
    <div className={classes.container}>
      <h2>Log in with your email and password</h2>
      <form onSubmit={submitHandler}>
        <FormInput
          labelOptions={{ htmlFor: "email", label: "Email" }}
          inputOptions={{
            name: "email",
            onChange: changeHandler,
            value: email,
            type: "email",
            required: true,
          }}
        />
        <FormInput
          labelOptions={{ htmlFor: "password", label: "Password" }}
          inputOptions={{
            name: "password",
            onChange: changeHandler,
            value: password,
            type: "password",
            required: true,
          }}
        />
        <p
          style={{
            color: `${signedIn === "Signed in successfully" ? "green" : "red"}`,
          }}
        >
          {signedIn}
        </p>
        <div className={classes["btns-container"]}>
          <Button>Login</Button>
          <Button onClick={logGoogleUserPopup} buttonType="google">
            Log in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
