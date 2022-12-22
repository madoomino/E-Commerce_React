import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

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
    <>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="displayName">Display Name</label>
          <input
            value={displayName}
            onChange={changeHandler}
            type="text"
            name="displayName"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={changeHandler}
            type="email"
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={changeHandler}
            type="password"
            name="password"
            required
          />
        </div>
        <div>
          <label htmlFor="name">Confirm Password</label>
          <input
            value={confirmPassword}
            onChange={changeHandler}
            type="password"
            name="confirmPassword"
            required
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </>
  );
};
export default SignUpForm;
