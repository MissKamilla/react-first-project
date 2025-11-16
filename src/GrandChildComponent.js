const GrandChildComponent = (props) => {
  console.log(props);

  return (
    <>
      <div>{props.myName.name}</div>
      <div>{props.myNameInArray[0]}</div>
      <div>{props.myNameFunction( )}</div>
    </>
  );
};

export default GrandChildComponent;
