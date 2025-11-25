import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Layout = () => {
  const getActiveLink = ({ isActive }) => (isActive ? "active-link" : "");
  const { testProvider } = useContext(AuthContext);

  console.log(testProvider);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <NavLink to="/" className={getActiveLink}>
          Home
        </NavLink>
        <NavLink to="/contact" className={getActiveLink}>
          Contact
        </NavLink>
        <NavLink to="/about" className={getActiveLink}>
          About
        </NavLink>
      </div>
      <main>
        <Outlet />
      </main>
      <p>{testProvider}</p>
      <footer>All rights ... 2025</footer>
    </>
  );
};

export default Layout;
