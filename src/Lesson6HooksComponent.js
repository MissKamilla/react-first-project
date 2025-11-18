import { useCallback, useEffect, useMemo, useState } from "react";

const Lesson6HooksComponent = () => {
  // useMemo
  /* const [list, setList] = useState([1, 2, 3, 4, 5]);

  const memoizedList = useMemo(() => {
    return list;
  }, [list]);

  const handleListChange = () => {
    setList([...list, 6]);
  };
 */

  const [list, setList] = useState([1, 2, 3, 4, 5]);
  const handleUseCallbackExample = useCallback(() => {
    setList([...list, 6]);
  }, []);

  useEffect(() => {
    handleUseCallbackExample();
    console.log("render");
  }, [handleUseCallbackExample]);

  const handleClick = () => setList([]);
  return (
    <>
      {/*  useMemo
      {memoizedList.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <button onClick={handleListChange}>Click me</button> */}

      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default Lesson6HooksComponent;
