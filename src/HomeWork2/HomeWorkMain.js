// import ListItem from './ListItem';
import { useState } from "react";
import ListItem from "./ListItem";

const HomeWorkMain = () => {
  const [input, setChange] = useState("");
  const [item, setClick] = useState([]);

  const onChangeHandler = (event) => {
    const value = event.target.value;
    setChange(value);
  };

  const onClickHandler = (input) => {
    const updateElement = [...item, input];
    setClick(updateElement);
    setChange("");
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
      <h1>{item.length}</h1>
      <ul>
        {item.map((element) => (
          <ListItem element={element} />
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

/* Зробити ToDo List

1 Додати input і кнопку, за допомогою яких ми будемо записувати наші to-do.
2 Після введення to-do в input і натискання на кнопку — воно має додатися до ToDo List.
3 Маємо побачити відмальований (відображений) ToDo List в інтерфейсі.
4 Показати кількість to-do у списку.
5 Додати подію (event), щоб можна було додавати to-do також після натискання клавіші “Enter”. */
