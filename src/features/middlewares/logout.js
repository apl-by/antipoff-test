import { TOKEN } from '../../constants/constants';

const logoutMiddleware = (store) => (next) => (action) => {
  if (action.type === 'auth/logout') {
    localStorage.removeItem(TOKEN);
  }

  return next(action);
};

export default logoutMiddleware;
