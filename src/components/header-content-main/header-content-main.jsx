import { useMediaQuery } from '../../hooks/useMediaQuery';
import Button from '../button/button';
import styles from './header-content-main.module.scss';
import { ReactComponent as ExitIcon } from '../../assets/icons/exit.svg';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice';

const cn = classNames.bind(styles);

const HeaderContentMain = () => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  const isMobile = useMediaQuery('(max-width: 768px)');

  const cnMixBtnOut = cn('mix-btn-out');

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Наша команда</h1>
      <p className={styles.container__description}>
        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
        ложатся на их плечи, и умеющие находить выход из любых, даже самых
        сложных ситуаций.
      </p>
      {!isMobile && (
        <Button variant="outlined" onClick={handleLogout} mix={cnMixBtnOut}>
          Выход
        </Button>
      )}
      {isMobile && (
        <button
          type="button"
          onClick={handleLogout}
          className={styles.container__exit}
        >
          <ExitIcon />
        </button>
      )}
    </div>
  );
};

export default HeaderContentMain;
