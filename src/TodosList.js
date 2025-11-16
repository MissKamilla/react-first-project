import GrandChildComponent from "./GrandChildComponent";

const TodosList = (props) => {
  // const TodosList = ({ todo }) => {
  return (
    <>
      <div>{props.todo}</div>
      {/* <GrandChildComponent newPropTodo={props.todo} /> */}
    </>
  );
};

export default TodosList;
