import GrandChildComponent from "./GrandChildComponent";
import TodosList from "./TodosList";

const RenderComponent = () => {
  const toDos = [
    { id: 1, todo: "firstTodo" },
    { id: 2, todo: "secondTodo" },
    { id: 3, todo: "thirdTodo" },
    { id: 4, todo: "fourthTodo" },
  ];

  const myName = {
    name: "Kamilla",
  };

  const myNameInArray = ["Kamilla"];

  const myNameFunction = () => {
    return "Kamilla";
  };

  return (
    <div>
      {/* {toDos.map((todo) => {
        return <TodosList key={todo.id} todo={todo.todo} />;
      })} */}

      <GrandChildComponent
        myName={myName}
        myNameInArray={myNameInArray}
        myNameFunction={myNameFunction}
      />
    </div>
  );
};

/* const RenderComponent = () => {
  const firstRanderValue = [];
  const secondRanderValue = [1, 2, 3];
  const valTrue = true;
  const valFalse = false;

  if (valTrue) {
    return <p>true</p>;
  }
  if (valFalse) {
    return <p>false</p>;
  }

  return (
    <>
      {!!firstRanderValue.length && <p>I'm firstRanderValue</p>}
      {firstRanderValue.length ? <p>I'm firstRanderValue</p> : <p>empty</p>}
      {firstRanderValue.length ? <p>I'm firstRanderValue</p> : null}
      {secondRanderValue && <p>I'm secondRanderValue</p>}

      <p>{valTrue ? "true" : "false"}</p>
    </>
  );
}; */

export default RenderComponent;
