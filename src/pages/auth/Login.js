import React, { useState } from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

import Card from "../../components/card/Card";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import Loader from "../../components/loader/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoader, setisLoader] = useState(false);
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    // console.log(email, password);
    signInWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        // console.log(user);
        setisLoader(true);
        toast.success("Login successful....");
        navigate("/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorMessage);
        toast.error(error.message);
        setisLoader(false);
      });
  };
  // Login with google
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(getAuth(), provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        setisLoader(true);
        toast.success("Login successful....");
        navigate("/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(error.message);
        setisLoader(false);
      });
  };
  return (
    <>
      {isLoader && <Loader />}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="Login" width="400" />
        </div>

        <Card>
          <div className={styles.form}>
            <h2>Login</h2>

            <form onSubmit={loginUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Login
              </button>
              <div className={styles.links}>
                <Link to="/reset">Reset Password</Link>
              </div>
              <p>-- or --</p>
            </form>
            <button
              className="--btn --btn-danger --btn-block"
              onClick={signInWithGoogle}>
              <FaGoogle color="#fff" /> Login With Google
            </button>
            <span className={styles.register}>
              <p>Don't have an account?</p>
              <Link to="/register">Register</Link>
            </span>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Login;
