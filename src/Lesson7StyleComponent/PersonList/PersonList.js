import { PERSONS } from "../utils";
import PersonListItem from "../PersonListItem/PersonListItem";
import { useState } from "react";

import styles from "./ProductList.module.css";
import classNames from "classnames";
import { Button, Title2 } from "./styles";

// const styles = {
//   containerAqua: { padding: 30, backgroundColor: "aqua" },
//   containerBlue: { padding: 30, backgroundColor: "blue" },
// };

const ProductList = () => {
  //   const [state, setState] = useState(false);
  //   const changeBGColor = () => {
  //     setState(!state);
  //   };
  //   return (
  //     <div style={{ padding: 30, backgroundColor: state ? "aqua" : "blue" }}>
  //       {PERSONS.map((person) => (
  //         <PersonListItem key={person.id} person={person} />
  //       ))}
  //       <button onClick={changeBGColor}>Change Color</button>
  //     </div>
  //   );

  //   const [state, setState] = useState(false);
  //   const changeBGColor = () => {
  //     setState(!state);
  //   };

  //   return (
  //     <div className={`container ${state ? "containerBlue" : "containerAqua"}`}>
  //       {PERSONS.map((person) => (
  //         <PersonListItem key={person.id} person={person} />
  //       ))}
  //       <button onClick={changeBGColor}>Change Color</button>
  //     </div>
  //   );

  const [state, setState] = useState(false);
  const changeBGColor = () => {
    setState(!state);
  };

  const setStyleTextColor = (type) => {
    if (type === "pink") {
      return "pinkColor";
    }
  };

  return (
    // <div className={classNames("container", { containerBlue: state })}>
    <div
      className={`
        ${styles.container} 
        ${state ? styles.containerBlue : ""} 
        ${styles[setStyleTextColor("pink")]}`}
    >
      <h1
        className={classNames(styles.textItalic, {
          [styles.yellowColor]: true,
        })}
      >
        Italic
      </h1>
      <Title2>Title 2</Title2>
      {PERSONS.map((person) => (
        <PersonListItem key={person.id} person={person} />
      ))}
      <Button primary={"green"} state={state} onClick={changeBGColor}>
        Change Color
      </Button>
    </div>
  );
};

export default ProductList;
