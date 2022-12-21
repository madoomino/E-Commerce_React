import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const Signin = () => {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default Signin;
