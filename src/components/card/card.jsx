import Avatar from '../avatar/avatar';
import { ReactComponent as LikedIcon } from '../../assets/icons/like-filled.svg';
import { ReactComponent as UnLikedIcon } from '../../assets/icons/like-outlined.svg';
import styles from './card.module.scss';

/**
 * Card компонент
 *
 * @param {Object} props
 * @param {Object} props.data - Данные для карточки
 * @param {string} props.data.avatar - URL аватара
 * @param {string} props.data.userName - Имя пользователя
 * @param {boolean} props.data.isLiked - Флаг, указывающий, понравилась ли карточка
 * @returns {JSX.Element}
 */

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <Avatar src={data.avatar} />
      <span className={styles.card__name}>{data.userName}</span>
      <button className={styles.card__like}>
        {data.isLiked ? <LikedIcon /> : <UnLikedIcon />}
      </button>
    </div>
  );
};

export default Card;
