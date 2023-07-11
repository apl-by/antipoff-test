import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import usersReducer from '../features/usersSlice';
import logoutMiddleware from '../features/middlewares/logout';
import { USER_LIKES } from '../constants/constants';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logoutMiddleware),
});

store.subscribe(() => {
  const { userLikes } = store.getState().users;
  localStorage.setItem(USER_LIKES, JSON.stringify(userLikes));
});
