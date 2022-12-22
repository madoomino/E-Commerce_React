import SignUpForm from "../../components/SignUpForm/SignUpForm";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const Login = () => {
  const logGoogleUserPopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Log in Page</h1>
      <button onClick={logGoogleUserPopup}>Log in with Google</button>
      <SignUpForm />
    </div>
  );
};

export default Login;
