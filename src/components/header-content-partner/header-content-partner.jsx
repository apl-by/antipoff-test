import { useNavigate } from 'react-router-dom';
import Avatar from '../avatar/avatar';
import Button from '../button/button';
import styles from './header-content-partner.module.scss';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { ReactComponent as ExitIcon } from '../../assets/icons/exit.svg';
import { ReactComponent as BackIcon } from '../../assets/icons/arrow-back.svg';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const HeaderContentPartner = () => {
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
        <Avatar size="lg" />
        <div className={styles.wrapper__group}>
          <h1 className={styles.wrapper__title}>Артур Королёв</h1>
          <p className={styles.wrapper__description}>Партнер</p>
        </div>
      </div>
      {!isMobile && (
        <>
          <Button variant="outlined" onClick={handleBtnBack} mix={cnMixBtnBack}>
            Назад
          </Button>
          <Button
            variant="outlined"
            onClick={() => undefined}
            mix={cnMixBtnOut}
          >
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
          <button type="button" className={styles.container__exit}>
            <ExitIcon />
          </button>
        </>
      )}
    </div>
  );
};

export default HeaderContentPartner;
