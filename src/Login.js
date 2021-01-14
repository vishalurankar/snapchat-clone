import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/appSlice";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch(
          login({
            username: result.user.displayName,
            profilePic: result.user.photoURL,
            id: result.user.uid,
          })
        );
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://scx1.b-cdn.net/csz/news/800a/2017/1-snapchat.jpg"
          alt=""
        />
        <Button variant="outlined" onClick={signIn}>
          Sign IN
        </Button>
      </div>
    </div>
  );
}

export default Login;
