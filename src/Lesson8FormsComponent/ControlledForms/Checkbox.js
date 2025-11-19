const Checkbox = ({ value, setValue }) => {
  const handleCheckboxChange = (event) => {
    const radio = event.target.value;
    setValue((prevState) => ({ ...prevState, radio }));
  };
  return (
    <div style={{ padding: "20px" }}>
      <label htmlFor="checkbox" style={{ marginRight: "10px" }}>
        Checkbox
      </label>
      <input
        onChange={handleCheckboxChange}
        checked={value.checkbox}
        type="checkbox"
        name="checkbox"
        id="checkbox"
      />
    </div>
  );
};

export default Checkbox;
