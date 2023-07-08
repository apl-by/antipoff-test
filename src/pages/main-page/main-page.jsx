import Button from '../../components/button/button';
import CardsList from '../../components/cards-list/cards-list';
import HeaderContentMain from '../../components/header-content-main/header-content-main';
import Header from '../../components/header/header';
import styles from './main-page.module.scss';

const MainPage = () => {
  return (
    <>
      <Header>
        <HeaderContentMain />
      </Header>
      <main className={styles.main}>
        <section className={styles.section}>
          <CardsList
            cardsList={[
              { avatar: '', userName: 'asdf asdf', isLiked: true, id: 1 },
              { avatar: '', userName: 'asdf asdf', isLiked: false, id: 2 },
              { avatar: '', userName: 'asdf asdf', isLiked: true, id: 3 },
              { avatar: '', userName: 'asdf asdf', isLiked: false, id: 4 },
              { avatar: '', userName: 'asdf asdf', isLiked: true, id: 5 },
              { avatar: '', userName: 'asdf asdf', isLiked: false, id: 6 },
              { avatar: '', userName: 'asdf asdf', isLiked: true, id: 7 },
              { avatar: '', userName: 'asdf asdf', isLiked: false, id: 8 },
            ]}
          />
          <Button variant="with-icon">Показать еще</Button>
        </section>
      </main>
    </>
  );
};

export default MainPage;
