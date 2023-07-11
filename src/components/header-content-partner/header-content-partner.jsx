import { useNavigate } from 'react-router-dom';
import Avatar from '../avatar/avatar';
import Button from '../button/button';
import styles from './header-content-partner.module.scss';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { ReactComponent as ExitIcon } from '../../assets/icons/exit.svg';
import { ReactComponent as BackIcon } from '../../assets/icons/arrow-back.svg';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice';

/**
 * HeaderContentPartner компонент
 *
 * @param {Object} props
 * @param {Object} props.user - Данные для контента
 * @param {string} props.user.avatar - URL аватара
 * @param {string} props.user.first_name - Имя пользователя
 * @param {boolean} props.user.last_name - Фамилия пользователя
 * @returns {JSX.Element}
 */

const cn = classNames.bind(styles);

const HeaderContentPartner = ({ user }) => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  const isMobile = useMediaQuery('(max-width: 768px)');

  const navigate = useNavigate();

  const handleBtnBack = () => {
    navigate(-1);
  };

  const cnMixBtnOut = cn('mix-btn-out');
  const cnMixBtnBack = cn('mix-btn-back');

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Avatar size="lg" src={user.avatar} />
        <div className={styles.wrapper__group}>
          <h1
            className={styles.wrapper__title}
          >{`${user.first_name} ${user.last_name}`}</h1>
          <p className={styles.wrapper__description}>Партнер</p>
        </div>
      </div>
      {!isMobile && (
        <>
          <Button variant="outlined" onClick={handleBtnBack} mix={cnMixBtnBack}>
            Назад
          </Button>
          <Button variant="outlined" onClick={handleLogout} mix={cnMixBtnOut}>
            Выход
          </Button>
        </>
      )}
      {isMobile && (
        <>
          <button
            type="button"
            className={styles.container__back}
            onClick={handleBtnBack}
          >
            <BackIcon />
          </button>
          <button
            type="button"
            className={styles.container__exit}
            onClick={handleLogout}
          >
            <ExitIcon />
          </button>
        </>
      )}
    </div>
  );
};

export default HeaderContentPartner;
