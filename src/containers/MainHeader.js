import {NavLink} from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to="/todol">Todo List{/*-- Vanilla+JS*/}</NavLink>
          </li>
          <li>
            <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to="/expenses">Expenses{/*-- JSX+Props+States*/}</NavLink>
          </li>
          <li>
            <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to="/cgoals">CourseGoals{/* -- Comp Styling*/}</NavLink>
          </li>
          <li>
            <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to="/users">VerUsers{/* -- Project 1*/}</NavLink>
          </li>
          <li>
            <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to="/loginusers">LoginUsers{/* -- Project 2*/}</NavLink>
          </li>
          <li>
            <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to="/foodorder">FoodOrder{/* -- Project 3*/}</NavLink>
          </li>
          <li>
            <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to="/userslist">UsersList{/* -- Class Based*/}</NavLink>
          </li>
          <li>
            <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to="/vermovies">VerMovies{/* -- API Callbacks*/}</NavLink>
          </li>
          <li>
            <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to="/verchooks">CustomHooks</NavLink>
          </li>
          <li>
            <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to="/verchtasks">CHTasks</NavLink>
          </li>
          <li>
            <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to="/verbasicform">Basic Form</NavLink>
          </li>
          <li>
            <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to="/reduxcounter">Redux Counter</NavLink>
          </li>
          <li>
            <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to="/reduxshop">Redux Shop</NavLink>
          </li>
          <li>
            <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to="/welcome">Welcome</NavLink>
          </li>                              
          <li>
            <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to="/products">Products</NavLink>
          </li>                    
          <li>
            <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to="/verquotes">Quotes</NavLink>
          </li>                              
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
