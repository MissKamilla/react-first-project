import { useEffect, useState } from "react";
import UnmountComponent from "./UnmountComponent";

const Lesson5HooksComponent = () => {
  const [value, setValue] = useState(0);
  const [isMounted, setIsMount] = useState(false);
  useEffect(() => {
    console.log("ComponentDidMount useEffect");
  }, []);

  useEffect(() => {
    console.log("ComponentDidUpdate useEffect");
  }, [value]);

  const handleClick = () => {
    setValue(value + 1);
  };

  const showMounted = () => {
    setIsMount(!isMounted);
  };

  return (
    <>
      <p>{value}</p>
      {isMounted ? <UnmountComponent /> : "Test"}
      <button onClick={handleClick}>Click me</button>
      <button onClick={showMounted}>Unmount</button>
    </>
  );
};

export default Lesson5HooksComponent;
