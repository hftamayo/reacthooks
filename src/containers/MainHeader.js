import {NavLink} from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/todol">Todo List{/*-- Vanilla+JS*/}</NavLink>
          </li>
          <li>
            <NavLink to="/expenses">Expenses{/*-- JSX+Props+States*/}</NavLink>
          </li>
          <li>
            <NavLink to="/cgoals">CourseGoals{/* -- Comp Styling*/}</NavLink>
          </li>
          <li>
            <NavLink to="/users">VerUsers{/* -- Project 1*/}</NavLink>
          </li>
          <li>
            <NavLink to="/loginusers">LoginUsers{/* -- Project 2*/}</NavLink>
          </li>
          <li>
            <NavLink to="/foodorder">FoodOrder{/* -- Project 3*/}</NavLink>
          </li>
          <li>
            <NavLink to="/userslist">UsersList{/* -- Class Based*/}</NavLink>
          </li>
          <li>
            <NavLink to="/vermovies">VerMovies{/* -- API Callbacks*/}</NavLink>
          </li>
          <li>
            <NavLink to="/verchooks">CustomHooks</NavLink>
          </li>
          <li>
            <NavLink to="/verchtasks">CHTasks</NavLink>
          </li>
          <li>
            <NavLink to="/verbasicform">Basic Form</NavLink>
          </li>
          <li>
            <NavLink to="/reduxcounter">Redux Counter</NavLink>
          </li>
          <li>
            <NavLink to="/reduxshop">Redux Shop</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
