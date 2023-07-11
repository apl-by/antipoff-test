import Form from '../../components/form/form';
import styles from './sign-up-page.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { registerThunk } from '../../features/authSlice';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const formOutErrors = useSelector((state) => state.auth.formOutErrors);

  const handleSubmit = async (data) => {
    dispatch(registerThunk(data));
  };

  return (
    <main className={styles.signup}>
      <Form
        onSubmit={handleSubmit}
        disabled={isLoading}
        outError={formOutErrors}
      />
    </main>
  );
};

export default SignUpPage;
