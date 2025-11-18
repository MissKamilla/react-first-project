import { useCallback, useEffect, useMemo, useState } from "react";
import { useCounter } from "../useCounter";
import ChildComponent from "./ChildComponent";
import SecondChildComponent from "./SecondChildComponent";

const MainComponent = () => {
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  const { value, increment, decrement } = useCounter(); //my hook
  return (
    <>
      <p>{value}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      <SecondChildComponent />
      {list.map((item, index) => {
        return <ChildComponent key={index} item={item} />;
      })}

      <button onClick={() => setList([...list, 6])}>OnClock</button>
    </>
  );
};

export default MainComponent;
