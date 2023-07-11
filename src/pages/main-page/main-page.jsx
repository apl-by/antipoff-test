import { useEffect } from 'react';
import Button from '../../components/button/button';
import CardsList from '../../components/cards-list/cards-list';
import HeaderContentMain from '../../components/header-content-main/header-content-main';
import Header from '../../components/header/header';
import styles from './main-page.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers, setPage, usersThunk } from '../../features/usersSlice';

const MainPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const page = useSelector((state) => state.users.page);
  const totalPages = useSelector((state) => state.users.totalPages);
  const lastResponse = useSelector((state) => state.users.lastResponse);

  const canUploadMore = totalPages !== undefined && totalPages > page;

  useEffect(() => {
    dispatch(usersThunk(page));
  }, [page, dispatch]);

  if (!lastResponse) return null;

  return (
    <>
      <Header>
        <HeaderContentMain />
      </Header>
      <main className={styles.main}>
        <section className={styles.section}>
          <CardsList cardsList={users} />
          {canUploadMore && (
            <Button variant="with-icon" onClick={() => dispatch(setPage())}>
              Показать еще
            </Button>
          )}
        </section>
      </main>
    </>
  );
};

export default MainPage;
