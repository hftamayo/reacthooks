import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import VerExpensesV3 from "./VerExpensesV3";
import VerGoals from "../components/CourseGoals/VerGoals";
import VerUsers from "../components/Users/VerUsers";
import LoginUsers from "../components/LoginUsers/LoginUsers";
import FoodOrder from "../components/FoodOrder/FoodOrder";
import UserFinder from "../components/UsersListCBased/UserFinder";
import VerMovies from "../components/Movies/VerMovies";
import VerCustomHooks from "../components/CustomHooks/VerCustomHooks";
import VerCHTasks from "../components/CustomHooksTask/VerCHTasks";
import VerBasicForm from "../components/BasicForm/VerBasicForm";
import VerCounter from "../components/ReduxCounter/VerCounter";
import VerReduxShop from "../components/ReduxShop/VerShop";
import MainHeader from "./MainHeader";
import ProductDetail from "../components/Products/ProductDetail";

const MenuApps = () => {
  return (
    <div>
      <main>
        <BrowserRouter>
          <MainHeader />
          <Switch>
            <Route path="/todol"></Route>
            <Route path="/expenses">
              <VerExpensesV3 />
            </Route>
            <Route path="/cgoals">
              <VerGoals />
            </Route>
            <Route path="/users">
              <VerUsers />
            </Route>
            <Route path="/loginusers">
              <LoginUsers />
            </Route>
            <Route path="/foodorder">
              <FoodOrder />
            </Route>
            <Route path="/userslist">
              <UserFinder />
            </Route>
            <Route path="/vermovies">
              <VerMovies />
            </Route>
            <Route path="/verchooks">
              <VerCustomHooks />
            </Route>
            <Route path="/verchtasks">
              <VerCHTasks />
            </Route>
            <Route path="/verbasicform">
              <VerBasicForm />
            </Route>
            <Route path="/reduxcounter">
              <VerCounter />
            </Route>
            <Route path="/reduxshop">
              <VerReduxShop />
            </Route>
            <Route path="/product-detail/:productId">
              <ProductDetail />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default MenuApps;
