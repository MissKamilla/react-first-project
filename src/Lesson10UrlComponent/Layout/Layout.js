import { Link, NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const getActiveLink = ({ isActive }) => (isActive ? "active-link" : "");

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
      <footer>All rights ... 2025</footer>
    </>
  );
};

export default Layout;
