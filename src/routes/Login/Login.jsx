import { useEffect } from "react";
import {
  auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";

const Login = () => {
  useEffect(() => {
    const getUser = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocFromAuth(response.user);
      }
    };
    getUser();
  }, []);

  const logGoogleUserPopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Log in Page</h1>
      <button onClick={logGoogleUserPopup}>Log in with Google</button>
      <button onClick={signInWithGoogleRedirect}>Log in with Google</button>
    </div>
  );
};

export default Login;
