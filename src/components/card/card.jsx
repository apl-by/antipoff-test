import Avatar from '../avatar/avatar';
import { ReactComponent as LikedIcon } from '../../assets/icons/like-filled.svg';
import { ReactComponent as UnLikedIcon } from '../../assets/icons/like-outlined.svg';
import styles from './card.module.scss';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { changeLike } from '../../features/usersSlice';

/**
 * Card компонент
 *
 * @param {Object} props
 * @param {Object} props.data
 * @param {Object} props.data.id
 * @param {string} props.data.avatar
 * @param {string} props.data.userName
 * @param {boolean} props.data.isLiked
 * @returns {JSX.Element}
 */

const Card = memo(({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <Avatar src={data.avatar} />
      <span
        className={styles.card__name}
      >{`${data.first_name} ${data.last_name}`}</span>
      <button
        className={styles.card__like}
        onClick={() => dispatch(changeLike(data.id))}
      >
        {data.isLiked ? <LikedIcon /> : <UnLikedIcon />}
      </button>
    </div>
  );
});

export default Card;
