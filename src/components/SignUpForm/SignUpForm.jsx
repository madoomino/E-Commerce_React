import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import { SignUpContainer } from "./SignUpForm.styles";

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
    if (password !== confirmPassword) {
      setFormFields((prevState) => ({
        ...prevState,
      }));
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
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

        <Button type="submit">Sign up</Button>
      </form>
    </SignUpContainer>
  );
};
export default SignUpForm;
