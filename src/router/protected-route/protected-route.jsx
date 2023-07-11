import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, to }) => {
  const isLogged = useSelector((state) => state.auth.isLogged);

  if (to === '/' && isLogged) {
    return <Navigate to={to} />;
  }

  if (to === '/sign-up' && !isLogged) {
    return <Navigate to={to} />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
