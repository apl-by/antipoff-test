import styles from './avatar.module.scss';
import classNames from 'classnames/bind';

/**
 * Avatar компонент
 *
 *  @param {Object} props
 *  @param {'sm' | 'lg'} props.size
 *  @param {string} props.src
 *  @returns {JSX.Element}
 */

const cn = classNames.bind(styles);

const Avatar = ({ size = 'sm', src }) => {
  const cnAvatar = cn('avatar', {
    [`avatar_size_${size}`]: size,
  });

  return <img src={src} alt="аватар" className={cnAvatar} />;
};

export default Avatar;
