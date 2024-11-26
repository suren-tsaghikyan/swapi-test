import React, { useEffect } from "react";
import { signInWithGoogle, signInWithFacebook } from "../../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/slices/authSlice";
import styles from "../../styles/Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const user = await signInWithGoogle();
    dispatch(setUser(user));
  };

  const handleFacebookLogin = async () => {
    const user = await signInWithFacebook();
    dispatch(setUser(user));
  };

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>Welcome! Please Login</h1>
      <button className={styles.loginButton} onClick={handleGoogleLogin}>
        Login with Google
      </button>
      {/* <button className={styles.loginButton} onClick={handleFacebookLogin}>
        Login with Facebook
      </button> */}
    </div>
  );
};

export default Login;
