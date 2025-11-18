import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useReducer, useRef, useState } from "react";

const HomeWorkMain = () => {
  // ----------------1-----------------
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Show update of count elemetnt");
  });

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  // -----------------2-----------------

  const names = ["Kamilla", "Vova", "Keks", "Mia", "Elena"];
  const [name, setName] = useState(names[0]);

  const showName = () => {
    setName(names[Math.floor(Math.random() * names.length)]);
  };

  // -----------------3-----------------
  const initialState = { name: "", lastName: "", year: "" };

  const [nameInput, setNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [yearInput, setYearInput] = useState("");

  const reducer = (state, action) => {
    switch (action.type) {
      case "name":
        return { ...state, name: action.payload };
      case "lastName":
        return { ...state, lastName: action.payload };
      case "year":
        return { ...state, year: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fullName = `${state.name} ${state.lastName} ${state.year}`;

  // -----------------4-----------------

  const refFocus = useRef();
  const handleFocus = () => {
    refFocus.current.focus();
  };
  const handleBlur = () => {
    refFocus.current.blur();
  };

  return (
    <div>
      {/* ------------1-------------- */}
      <p>{count}</p>
      <button onClick={handleClick}>Add</button>

      {/* ------------2-------------- */}
      <p>Hello {name}</p>
      <button onClick={showName}>New name</button>

      {/* ------------3-------------- */}
      <h2>{fullName || "Тут будет повне ім'я"}</h2>
      <input
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        placeholder="Ім'я"
      />
      <button onClick={() => dispatch({ type: "name", payload: nameInput })}>
        Name
      </button>

      <input
        value={lastNameInput}
        onChange={(e) => setLastNameInput(e.target.value)}
        placeholder="Прізвище"
      />
      <button
        onClick={() => dispatch({ type: "lastName", payload: lastNameInput })}
      >
        Last Name
      </button>

      <input
        value={yearInput}
        onChange={(e) => setYearInput(e.target.value)}
        placeholder="Рік народження"
      />
      <button onClick={() => dispatch({ type: "year", payload: yearInput })}>
        Birth Year
      </button>

      {/* ------------4-------------- */}
      <div>
        <input ref={refFocus} />
        <button onClick={handleFocus}>Фокус</button>
        <button onClick={handleBlur}>Блюр</button>
      </div>
    </div>
  );
};

export default HomeWorkMain;

/* 1) useEffect:
Створіть компонент, який використовує хук useEffect. При кожному оновленні компонента хук useEffect
має викликатися і виводити повідомлення в консоль. Перевірте, що повідомлення виводяться під час
рендерингу компонента та після його оновлення. (Оновлювати компонент маєте будь як)
2) useState:
Створіть компонент, який використовує хук useState. При натисканні на кнопку нехай виводиться рандомно
фразу “Hello …”, де “…” буде рандомне імʼя, додайте мінімум 5 імен.
3) useReducer:
Створіть компонент, який використовує хук useReducer. Додайте 3 кнопки “Імʼя”, “Пвізвище”, “Рік народження”.
Додайте аналогічні 3 текстові поля “input”. initialState = {name: ‘’, lastName: ‘’, birthYear: ‘’}. Після вводу в текстове
поле з іменем і натискання на кнопку “Імʼя”, має додати введений текст в обʼєкт поле “name”, і т.д. Виведіть
обʼєкт на екран.
4) useRef:
Створіть компонент, який використовує хук useRef. Створіть текстове поле та кнопку “Фокус" та “Блюр”. При
натисканні на кнопку “Фокус”, фокус повинен переміститися в текстове поле за допомогою хука useRef. При
натисканні на кнопку “Блюр”, фокус має відмінитись із текстового поля. */
