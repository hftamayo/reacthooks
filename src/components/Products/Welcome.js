import { Link, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome Page</h1>
      <Link to="new-user">Link para demostrar que con la version 6 no se requiere RouterMatch</Link>
      <Outlet />
    </section>
  );
};

export default Welcome;
