// text='delete' function="onDeleteBtn" idList={input.id}
const ButtonComponent = (props) => {
  return (
    <button type={props.type} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default ButtonComponent;
