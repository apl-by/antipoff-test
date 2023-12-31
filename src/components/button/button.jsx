import styles from './button.module.scss';
import { ReactComponent as MoreArrowIcon } from '../../assets/icons/more-arrow.svg';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

/**
 * Button компонент.
 *
 * @param {Object} props
 * @param {ReactNode} props.children
 * @param {'submit' | 'button'} props.type
 * @param {'filled' | 'outlined' | 'with-icon'} props.variant
 * @param {boolean} props.fullWidth
 * @param {boolean} props.disabled
 * @param {string} props.mix - микс-селектор для внешнего позиционирования блока по БЭМ
 * @param {function} props.onClick
 * @returns {JSX.Element}
 */

const Button = ({
  children,
  type = 'button',
  variant = 'filled',
  fullWidth,
  disabled,
  mix,
  onClick,
}) => {
  const cnButton = cn(
    'button',
    {
      'button_full-widthed': fullWidth,
      [`button_type_${variant}`]: variant,
    },
    mix
  );

  return (
    <button
      type={type}
      className={cnButton}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      {variant === 'with-icon' && (
        <MoreArrowIcon className={styles.button__icon} />
      )}
    </button>
  );
};

export default Button;
