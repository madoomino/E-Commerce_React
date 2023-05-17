import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
  signUpStart,
} from "../../store/user/user.action";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import { ButtonsContainer, SignInContainer } from "./LoginForm.styles";
import { Link } from "react-router-dom";
const SignInForm = () => {
  const dispatch = useDispatch();
  const logGoogleUserPopup = () => {
    dispatch(googleSignInStart());
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
      dispatch(emailSignInStart(email, password));

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
      <p>
        Don't have an account?{' '}
        <Link to="/signup" style={{textDecoration: "underline"}}>Sign up</Link>
      </p>
    </SignInContainer>
  );
};
export default SignInForm;
