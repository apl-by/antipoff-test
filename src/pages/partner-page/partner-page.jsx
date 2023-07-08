import HeaderContentPartner from '../../components/header-content-partner/header-content-partner';
import Header from '../../components/header/header';
import styles from './partner-page.module.scss';

const PartnerPage = () => {
  return (
    <>
      <Header>
        <HeaderContentPartner />
      </Header>
      <main className={styles.main}></main>
    </>
  );
};

export default PartnerPage;
