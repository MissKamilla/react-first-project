import { debounce } from "lodash";

const TextInputs = ({ value, setValue }) => {
  const handleNameChange = debounce((event) => {
    const name = event.target.value;
    console.log(name);
    setValue((prevState) => ({ ...prevState, name }));
  }, 1000);

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setValue((prevState) => ({ ...prevState, email }));
  };

  return (
    <>
      {" "}
      <div style={{ padding: "10px" }}>
        <label htmlFor="firstName" style={{ marginRight: "10px" }}>
          Name
        </label>
        <input
          onChange={handleNameChange}
          type="text"
          name="firstName"
          id="firstName"
        />
      </div>
      <div style={{ padding: "10px" }}>
        <label htmlFor="email" style={{ marginRight: "10px" }}>
          Email
        </label>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
        />
      </div>
    </>
  );
};

export default TextInputs;
