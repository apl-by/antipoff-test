import Form from '../../components/form/form';
import styles from './sign-up-page.module.scss';

const SignUpPage = () => {
  return (
    <main className={styles.signup}>
      <Form onSubmit={() => undefined} />
    </main>
  );
};

export default SignUpPage;
