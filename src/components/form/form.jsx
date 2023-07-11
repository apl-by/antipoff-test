import { useCallback, useEffect, useState } from 'react';
import styles from './form.module.scss';
import Input from '../input/input';
import {
  checkText,
  checkEmail,
  checkPassword,
  comparePassword,
} from '../../utils/validators';
import Button from '../button/button';
import { REGISTER_INPUTS } from '../../constants/constants';

/**
 * Form компонент
 *
 * @param {Object} props
 * @param {function} props.onSubmiit
 * @param {boolean} props.disabled
 * @param {string} props.outError
 * @returns {JSX.Element}
 */

const { userName, email, password, repeatPassword } = REGISTER_INPUTS;
const initInputs = {
  [userName]: '',
  [email]: '',
  [password]: '',
  [repeatPassword]: '',
};
const initError = {
  [userName]: '',
  [email]: '',
  [password]: '',
  [repeatPassword]: '',
};

const Form = ({ onSubmit, disabled, outError }) => {
  const [inputValue, setInputValue] = useState(initInputs);

  const [error, setError] = useState(initError);

  const validators = {
    [userName]: checkText,
    [email]: checkEmail,
    [password]: checkPassword,
    [repeatPassword]: comparePassword,
  };

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

  useEffect(() => {
    const resError = { ...initError };
    Object.entries(outError).forEach(([k, v]) => {
      if (v) resError[k] = v;
    });
    setError(resError);
  }, [outError]);

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
        name={userName}
        title="Имя"
        placeholder="Введите имя"
        value={inputValue[userName]}
        onChange={onChange}
        validator={validators[userName]}
        error={error[userName]}
        setError={setError}
      />
      <Input
        type="email"
        name={email}
        title="Электронная почта"
        placeholder="Введите электронную почту"
        value={inputValue[email]}
        onChange={onChange}
        validator={validators[email]}
        error={error[email]}
        setError={setError}
      />
      <Input
        type="password"
        name={password}
        title="Пароль"
        placeholder="Введите пароль"
        value={inputValue[password]}
        onChange={onChange}
        validator={validators[password]}
        error={error[password]}
        setError={setError}
      />
      <Input
        type="password"
        name={repeatPassword}
        title="Подтвердите пароль"
        placeholder="Подтвердите пароль"
        value={inputValue[repeatPassword]}
        onChange={onChange}
        validator={validators[repeatPassword]}
        error={error[repeatPassword]}
        setError={setError}
        currentPassword={inputValue[password]}
      />
      <Button type="submit" fullWidth disabled={disabled}>
        Зарегистрироваться
      </Button>
    </form>
  );
};

export default Form;
