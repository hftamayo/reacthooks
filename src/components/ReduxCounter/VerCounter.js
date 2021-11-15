import { Fragment } from "react";
import { useSelector } from "react-redux";

import Counter from "./Counter";
import Header from "./Header";
import Auth from "./Auth";
import UserProfile from "./UserProfile";


function VerCounter(){
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    return (
        <Fragment>
            <Header />
            {!isAuth && <Auth />}
            {isAuth && <UserProfile />}
            <Counter />
        </Fragment>
    );
}

export default VerCounter;