import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../../redux/counter/counterSlice";
import { counterSelector } from "../../../redux/counter/counterSelecctors";

const About = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const counterValue = useSelector(counterSelector);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = (amount) => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>About</h1>
      <div>
        <p>{counterValue}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={() => handleIncrementByAmount(5)}>
          Increment By Amount
        </button>
      </div>

      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};

export default About;
