// import HomeWorkMain1 from "./HomeWork1/HomeWorkMain";
// import HomeWorkMain2 from "./HomeWork2/HomeWorkMain";
// import HomeWorkMain4 from "./HomeWork4/HomeWorkMain";
import HomeWorkMain5 from "./HomeWork5/HomeWorkMain";
// import { createElement } from "react";
// import ListComponent from "./ListComponent";
import CounterComponent from "./CounterComponent";
// import RenderComponent from './RenderComponent'
// import MyClassComponent from "./MyClassComponent";
// import Lesson5HooksComponent from "./Lesson5HooksComponent";
// import Lesson6HooksComponent from "./Lesson6HooksComponent";
// import Lesson7StyleComponent from "./Lesson7StyleComponent/HomeWorkMain";
// import Lesson8FormsComponent from "./Lesson8FormsComponent/MainComponent";
// import Lesson9RestAPIComponent1 from "./Lesson9RestAPIComponent/MainComponent";
import Lesson9RestAPIComponent2 from "./Lesson9RestAPIComponent/ReactQueryComponent";
// import ReactMemoComponent from "./ReactMemoComponent/MainComponent";
import { useRef, useState } from "react";

import "./App.css";

function App() {
  // const headerRef = useRef();
  // const handleFocus = () => {
  //   headerRef.current.focus();
  //   console.log(headerRef.current.value);
  // };

  return (
    <div className="App">
      <header className="App-header">
        {/* <input ref={headerRef} />

        <p>Text</p>
        <button onClick={handleFocus}>Focus me</button> */}

        {/* <HomeWorkMain1 /> */}
        {/* <HomeWorkMain2 /> */}
        {/* <HomeWorkMain4 /> */}
        {/* <HomeWorkMain5 /> */}

        {/* <CounterComponent /> */}
        {/* <MyClassComponent /> */}
        {/* <RenderComponent /> */}

        {/* <MyClassComponent />  */}

        {/* <Lesson5HooksComponent /> */}
        {/* <Lesson6HooksComponent /> */}

        {/* <ReactMemoComponent /> */}
        {/* <Lesson7StyleComponent /> */}
        {/* <Lesson8FormsComponent /> */}
        {/* <Lesson9RestAPIComponent1 /> */}
        <Lesson9RestAPIComponent2 />
      </header>
    </div>
  );
}

export default App;
