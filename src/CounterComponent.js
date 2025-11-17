import { useReducer, useState } from "react";

const CounterComponent = () => {
  // prevState
  /*   const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState +1);//prevState - что бы можно бвло вызвать несколько раз setCount()
  };

  const decrement = () => {
    setCount((prevState) => prevState +1);
  }; 

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment me</button>
      <button onClick={decrement}>Decrement me</button>
    </div>
  );*/

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return { count: 0 };
    }
  };

  const [value, dispatch] = useReducer(reducer, { count: 0 });

  const handleClick = (type) => {
    dispatch(type);
  };

  return (
    <div>
      <p>{value.count}</p>
      <button onClick={() => handleClick({ type: "increment" })}>Add</button>
      <button onClick={() => handleClick({ type: "decrement" })}>Minus</button>
      <button onClick={() => handleClick({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterComponent;
