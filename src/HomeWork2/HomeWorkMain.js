// import ListItem from './ListItem';
import { useState } from "react";
import ListItem from "./ListItem";
import ButtonComponent from "./ButtonComponent";

const HomeWorkMain = () => {
  const initialValues = [
    { id: 1, name: "Vova" },
    { id: 2, name: "Kamilla" },
    { id: 3, name: "Mia" },
    { id: 4, name: "Keks" },
  ];

  const [input, setInput] = useState("");
  const [click, setClick] = useState(initialValues);

  const onChangeHandler = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  const onClickHandler = (input) => {
    const newItem = { id: Date.now(), name: input };
    const updateElement = [...click, newItem];

    setClick(updateElement);
    setInput("");
  };

  const hendleDelete = (id) => {
    const filteredItems = click.filter(i => i.id !== id);
    setClick(filteredItems);
  };

  const onEnterHandler = (e) => {
    if (e.key === "Enter") {
      onClickHandler(input);
    }
  };

  return (
    <div>
      <input
        onChange={onChangeHandler}
        value={input}
        onKeyDown={onEnterHandler}
        placeholder="new task"
      />
      <h1>{click.length}</h1>
      <ul>
        {click.map((element) => (
          <ListItem key={element.id} id={element.id} name={element.name}>
            {<ButtonComponent text='Delete' onClick={() => hendleDelete(element.id)} type='button'/>}
          </ListItem>
        ))}
      </ul>

      <button
        onClick={() => {
          onClickHandler(input);
        }}
      >
        Add TO DO
      </button>
    </div>
  );
};

export default HomeWorkMain;
