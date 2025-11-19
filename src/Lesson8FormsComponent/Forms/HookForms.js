import { useForm } from "react-hook-form";

const HookForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Форма з використанням React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Ім'я:</label>
          <input
            type="text"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name && (
            <span style={{ color: "red" }}>Це поле є обов'язковим</span>
          )}
        </div>

        <div>
          <label htmlFor="email">Електронна пошта:</label>
          <input
            type="email"
            {...register("email", {
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && (
            <span style={{ color: "red" }}>
              Введіть коректну електронну пошту
            </span>
          )}
        </div>

        <button type="submit">Відправити</button>
      </form>
    </div>
  );
};

export default HookForms;
