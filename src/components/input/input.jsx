import { useId, useState } from 'react';
import styles from './input.module.scss';
import eye from '../../assets/icons/eye.svg';
import eyeOff from '../../assets/icons/eye-off.svg';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

/**
 * Input компонент.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.type
 * @param {string} props.name
 * @param {string} props.value
 * @param {function} props.onChange
 * @param {string} props.placeholder
 * @param {string} props.error
 * @param {function} props.setError
 * @param {function} props.validator
 * @param {string} props.currentPassword
 * @returns {JSX.Element}
 */

const Input = ({
  title,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  setError,
  validator,
  currentPassword,
}) => {
  const id = useId();
  const [shownPassword, setShownPassword] = useState(false);
  const typeIcon = !shownPassword ? eyeOff : eye;
  const attrType = type === 'password' && shownPassword ? 'text' : type;

  const onFocus = () => {
    setError((prev) => ({ ...prev, [name]: '' }));
  };

  const onBlur = (e) => {
    const { value, name } = e.target;
    if (value) {
      if (name === 'repeatPassword') {
        setError((prev) => {
          return {
            ...prev,
            [name]: validator(value, currentPassword),
          };
        });
        return;
      }
      setError((prev) => ({ ...prev, [name]: validator(value) }));
      return;
    }
    setError((prev) => ({ ...prev, [name]: '' }));
  };

  const cnInputWrapper = cn('label__wrapper', {
    label__wrapper_type_error: error,
  });

  return (
    <label className={styles.label} htmlFor={id}>
      <span className={styles.label__title}>{title}</span>
      <div className={cnInputWrapper}>
        <input
          className={styles.label__input}
          type={attrType}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete="on"
          placeholder={placeholder}
          id={id}
          onFocus={onFocus}
          onBlur={onBlur}
          spellCheck="false"
        />
        {type === 'password' && (
          <button
            type="button"
            className={styles.label__icon}
            onClick={(e) => {
              e.preventDefault();
              setShownPassword(!shownPassword);
            }}
          >
            <img src={typeIcon} alt="eye-icon" />
          </button>
        )}
      </div>
      {error && <span className={styles.label__error}>{error}</span>}
    </label>
  );
};

export default Input;
