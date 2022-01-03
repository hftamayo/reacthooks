import { NavLink, useRouteMatch } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const { path, url } = useRouteMatch();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to={`${path}/quotes`} activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to={`${path}/new-quote`} activeClassName={classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;