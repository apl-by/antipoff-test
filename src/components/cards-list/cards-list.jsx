import Card from '../card/card';
import styles from './cards-list.module.scss';

/**
 * CardsList компонент
 *
 * @param {Object} props
 * @param {Array} props.cardsList - Массив данных для карточек
 * @returns {JSX.Element}
 */

const CardsList = ({ cardsList }) => {
  return (
    <ul className={styles.list}>
      {cardsList.map((cardData) => (
        <li className={styles.list__item} key={cardData.id}>
          <Card data={cardData} />
        </li>
      ))}
    </ul>
  );
};

export default CardsList;
