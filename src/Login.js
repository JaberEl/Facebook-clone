import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { authentification, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
  const [state, dispatch] = useStateValue();

  const SignIn = () => {
    authentification
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://vtpkb4cbz742mpwjg43ich01-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Facebook-Logo.png"
          alt=""
        />
      </div>

      <Button type="submit" onClick={SignIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
