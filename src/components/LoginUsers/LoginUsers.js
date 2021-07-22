import React, { useContext } from "react";

import Login from "./Login/Login";
import Home from "./Home/Home";
import MainHeader from "./MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function LoginUsers() {
  const ctx = useContext(AuthContext);
  return (
    <React.fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.fragment>
  );
}

export default LoginUsers;
