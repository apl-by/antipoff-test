import { RouterProvider } from 'react-router-dom';
import router from '../router/router';
import styles from './app.module.scss';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
