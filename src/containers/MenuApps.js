import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import VerExpensesV3 from "./VerExpensesV3";
import VerGoals from "../components/CourseGoals/VerGoals";

const MenuApps = () => {
  return (
    <div>
      <h1>Menu Apps</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/todol">Todo List-* Vanilla+JS</Link>
            </li>
            <li>
              <Link to="/expenses">Expenses-* JSX+Props+States</Link>
            </li>
            <li>
              <Link to="/cgoals">CourseGoals -* Comp Styling</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/todol">
          </Route>
          <Route path="/expenses">
            <VerExpensesV3 />
          </Route>
          <Route path="/cgoals">
            <VerGoals />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default MenuApps;
