import HeaderContentMain from '../../components/header-content-main/header-content-main';
import Header from '../../components/header/header';
import styles from './main-page.module.scss';

const MainPage = () => {
  return (
    <>
      <Header>
        <HeaderContentMain />
      </Header>
      <main className={styles.main}></main>
    </>
  );
};

export default MainPage;
