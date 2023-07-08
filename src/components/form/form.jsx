import { useCallback, useMemo, useState } from 'react';
import styles from './form.module.scss';
import Input from '../input/input';
import {
  checkText,
  checkEmail,
  checkPassword,
  comparePassword,
} from '../../utils/validators';
import Button from '../button/button';

/**
 * Form компонент
 *
 * @param {Object} props
 * @param {function} props.onSubmiit
 * @param {boolean} props.disabled
 * @returns {JSX.Element}
 */

const input = {
  userName: 'userName',
  email: 'email',
  password: 'password',
  repeatPassword: 'repeatPassword',
};

const Form = ({ onSubmit, disabled }) => {
  const [inputValue, setInputValue] = useState({
    [input.userName]: '',
    [input.email]: '',
    [input.password]: '',
    [input.repeatPassword]: '',
  });

  const [error, setError] = useState({
    [input.userName]: '',
    [input.email]: '',
    [input.password]: '',
    [input.repeatPassword]: '',
  });

  const validators = useMemo(
    () => ({
      [input.userName]: checkText,
      [input.email]: checkEmail,
      [input.password]: checkPassword,
      [input.repeatPassword]: comparePassword,
    }),
    []
  );

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let resultErr = false;

    Object.entries(validators).forEach(([k, func]) => {
      let currentErr = '';
      if (k === 'repeatPassword') {
        currentErr = func(inputValue[k], inputValue.password);
        setError((prev) => ({ ...prev, [k]: currentErr }));
      }
      if (k !== 'repeatPassword') {
        currentErr = func(inputValue[k]);
        setError((prev) => ({ ...prev, [k]: currentErr }));
      }
      if (currentErr) resultErr = true;
    });

    if (resultErr) return;

    onSubmit(inputValue);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      disabled={disabled}
      noValidate
    >
      <h2 className={styles.form__title}>Регистрация</h2>
      <Input
        type="text"
        name={input.userName}
        title="Имя"
        placeholder="Введите имя"
        value={inputValue[input.userName]}
        onChange={onChange}
        validator={validators[input.userName]}
        error={error[input.userName]}
        setError={setError}
      />
      <Input
        type="email"
        name={input.email}
        title="Электронная почта"
        placeholder="Введите электронную почту"
        value={inputValue[input.email]}
        onChange={onChange}
        validator={validators[input.email]}
        error={error[input.email]}
        setError={setError}
      />
      <Input
        type="password"
        name={input.password}
        title="Пароль"
        placeholder="Введите пароль"
        value={inputValue[input.password]}
        onChange={onChange}
        validator={validators[input.password]}
        error={error[input.password]}
        setError={setError}
      />
      <Input
        type="password"
        name={input.repeatPassword}
        title="Подтвердите пароль"
        placeholder="Подтвердите пароль"
        value={inputValue[input.repeatPassword]}
        onChange={onChange}
        validator={validators[input.repeatPassword]}
        error={error[input.repeatPassword]}
        setError={setError}
        currentPassword={inputValue[input.password]}
      />
      <Button type="submit" fullWidth>
        Зарегистрироваться
      </Button>
    </form>
  );
};

export default Form;
