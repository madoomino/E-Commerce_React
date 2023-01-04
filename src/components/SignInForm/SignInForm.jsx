import { useState } from "react";
import {
  AuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import { ButtonsContainer, SignInContainer } from "./SignInForm.styles";
const SignInForm = () => {
  const logGoogleUserPopup = async () => {
    await signInWithGooglePopup();
  };

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    signedIn: "",
  });

  const { email, password } = formFields;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { user } = await AuthWithEmailAndPassword(email, password);

      setFormFields((prevState) => ({
        ...prevState,
      }));
    } catch (error) {
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        setFormFields((prevState) => ({
          ...prevState,
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

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
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

        <ButtonsContainer>
          <Button>LOGIN</Button>
          <Button
            onClick={logGoogleUserPopup}
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
          >
            GOOGLE
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};
export default SignInForm;
