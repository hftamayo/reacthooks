import React from "react";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
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
import Products from "../components/Products/Products";
import Welcome from "../components/Products/Welcome";
import VerQuotes from "../components/Quotes/VerQuotes";
import NotFound from "../components/Quotes/NotFound";

const MenuApps = () => {
  return (
    <div>
      <main>
        <BrowserRouter>
          <MainHeader />
          <Routes>
            <Route path="/todol"></Route>
            <Route path="/expenses" element={<VerExpensesV3 />} />

            <Route path="/cgoals" element={<VerGoals />} />

            <Route path="/users" element={<VerUsers />} />

            <Route path="/loginusers" element={<LoginUsers />} />

            <Route path="/foodorder" element={<FoodOrder />} />

            <Route path="/userslist" element={<UserFinder />} />

            <Route path="/vermovies" element={<VerMovies />} />

            <Route path="/verchooks" element={<VerCustomHooks />} />

            <Route path="/verchtasks" element={<VerCHTasks />} />

            <Route path="/verbasicform" element={<VerBasicForm />} />

            <Route path="/reduxcounter" element={<VerCounter />} />

            <Route path="/reduxshop" element={<VerReduxShop />} />

            <Route path="/" element={<Navigate to="/welcome" />}>
              <Route path="/welcome/*" element={<Welcome />} />
              <Route path="new-user" element={<p>Welcome new user</p>} />
            </Route>

            <Route path="/products" element={<Products />} />

            <Route path="/products/:productId" element={<ProductDetail />} />

            <Route path="/verquotes" element={<VerQuotes />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default MenuApps;
