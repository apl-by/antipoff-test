import { Outlet } from 'react-router-dom';
import styles from './main-layout.module.scss';

const MainLayout = () => (
  <div className={styles.layout}>
    <Outlet />
  </div>
);
export default MainLayout;
