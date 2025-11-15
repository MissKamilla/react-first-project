import { useState } from "react";
import ListItemComponent from "./ListItemComponent";

const ListComponent = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState(["First element"]);

  const onClickHandler = (input) => {
    const updatedElement = [...item, input];
    setItem(updatedElement);
    setInput("");
  };
  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  return (
    <> {/*или <React.Fragment> */}
      <input onChange={onChangeHandler} value={input} />
      <ul>
        {item.map((element, index) => (
          <ListItemComponent element={element} index={index}/>
        ))}
      </ul>
      <button onClick={() => onClickHandler(input)}>Add new element</button>
    </>
  );
};

export default ListComponent;
