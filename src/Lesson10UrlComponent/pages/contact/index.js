import { Link, useLocation, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Contact</h1>
      {/*практика  useNavigate*/}
      <button onClick={() => navigate(-1)}>Go back</button>

      <div>
        <Link to="1">1</Link>
      </div>
      <div>
        <Link to="2">2</Link>
      </div>
      <div>
        <Link to="3">3</Link>
      </div>
    </>
  );
};

export default Contact;
