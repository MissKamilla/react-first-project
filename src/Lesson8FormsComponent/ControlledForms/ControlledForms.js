import TextInputs from "./TextInputs";
import Checkbox from "./Checkbox";
import RadioButtons from "./RadioButtons";
import InputData from "./InputData";
import CustomSelect from "./CustomSelect";
import { useState } from "react";

const ControlledForms = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    checkbox: false,
    radio: "",
    select: "option 1",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextInputs value={value} setValue={setValue} />
        <Checkbox value={value} setValue={setValue} />
        <RadioButtons value={value} setValue={setValue} />
        <CustomSelect value={value} setValue={setValue} />

        <button type="submit" style={{ width: "200px" }}>
          Submit
        </button>
      </form>
      <InputData value={value} />
    </>
  );
};

export default ControlledForms;
