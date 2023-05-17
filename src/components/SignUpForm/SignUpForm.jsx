import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import { ButtonsContainer, SignUpContainer } from "./SignUpForm.styles";
import {
  googleSignInStart,
  emailSignInStart,
  signUpStart,
} from "../../store/user/user.action";
import { Link } from "react-router-dom";
const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setFormFields((prevState) => ({
        ...prevState,
      }));
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
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

  return (
    <SignUpContainer>
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

        <ButtonsContainer>
        <Button type="submit">Sign up</Button>
        <p>Already a user? <Link to="/login" style={{textDecoration: "underline", color:"blue"}}>Sign in</Link></p>
        </ButtonsContainer>
        
      </form>
      
    </SignUpContainer>
  );
};
export default SignUpForm;
