import { useRef } from "react";

const UncontrolledForm = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.firstName.value;
    const email = event.target.email.value;
    console.log({ name, email });

    const refName = formRef.current.firstName.value;
    const refEmail = formRef.current.email.value;
    console.log({ refName, refEmail });

    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label htmlFor="firstName">Name</label>
      <input type="text" name="firstName" id="firstName" />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" autoComplete="email" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
