import styles from './header.module.scss';

/**
 * Header компонент.
 *
 * @param {Object} props
 * @param {ReactNode} props.children
 * @returns {JSX.Element}
 */

const Header = ({ children }) => {
  return <header className={styles.header}>{children}</header>;
};

export default Header;
