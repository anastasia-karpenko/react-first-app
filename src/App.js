import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  function onSubmit(data) {
    console.log(data);
    reset();
  }
  return (
    <div className="App">
      <h2>Форма регистрации</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('username', {
            required: 'Поле не заполнено',
            minLength: {
              value: 6,
              message: 'Минимум 6 символов',
            },
            maxLength: {
              value: 24,
              message: 'Максимум 24 символа',
            },
            pattern: /^[A-Za-z]+$/i,
          })}
          placeholder="Имя"
        />
        {errors.username && (
          <p style={{ color: 'red' }}>{errors.username.message}</p>
        )}
        <br />
        <input
          {...register('email', {
            required: 'Обязательное поле',
          })}
          placeholder="Электронная почта"
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        <br />
        <input
          {...register('password', {
            required: 'Обязательное поле',
            minLength: {
              value: 8,
              message: 'Минимум 8 символов',
            },
            maxLength: {
              value: 16,
              message: 'Максимум 16 символов',
            },
          })}
          placeholder="Пароль"
        />
        {errors.password && (
          <p style={{ color: 'red' }}>{errors.password.message}</p>
        )}
        <br />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default App;
