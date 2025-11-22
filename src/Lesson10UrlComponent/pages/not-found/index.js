import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>This page not found</h1>
      <Link style={{ color: "#ef09a8" }} to="/">
        Home page
      </Link>
    </div>
  );
};

export default NotFound;
