import React from "react";
import { useRecoilValue } from "recoil";
import { LoginState } from './../Atom/LoginState';
import MainPage from './MainPage';
import Home from './Home';

function House() {
  const isLoggedIn = useRecoilValue(LoginState);

  return (
    <div>
      {isLoggedIn ? <Home />:  <MainPage /> }
    </div>
  );
}

export default House;