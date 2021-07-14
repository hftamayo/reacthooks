import React, { useState, useEffect } from "react";

import Login from "./Login/Login";
import Home from "./Home/Home";
import MainHeader from "./MainHeader/MainHeader";

function LoginUsers() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    //sin el uso de useEffect, el chequeo de esta flag sería infinito
    //la funcion es ejecutada DESPUES que el componente ha sido re-evaluado
    const storeUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    if (storeUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default LoginUsers;
