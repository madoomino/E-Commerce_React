import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import classes from "./Login.module.scss";

const Login = () => {
  return (
    <div className={classes.container}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Login;
