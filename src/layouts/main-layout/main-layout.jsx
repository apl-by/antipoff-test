import { Outlet, ScrollRestoration } from 'react-router-dom';
import styles from './main-layout.module.scss';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Outlet />
      <ScrollRestoration />
    </div>
  );
};
export default MainLayout;
