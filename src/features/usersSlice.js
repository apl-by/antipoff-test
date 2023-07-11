import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import usersApi from '../api/users-api';
import { USER_LIKES } from '../constants/constants';

export const usersThunk = createAsyncThunk('users/usersThunk', async (page) => {
  return await usersApi.getUsers(page);
});

const initialState = {
  userPages: {},
  page: 1,
  totalPages: undefined,
  lastResponse: undefined,
  isLoading: false,
  error: '',
  userLikes: JSON.parse(localStorage.getItem(USER_LIKES)) || [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setPage: (state) => {
      state.page++;
    },

    changeLike: (state, action) => {
      const { userLikes, userPages } = state;
      const id = action.payload;

      for (const key in userPages) {
        if (userPages.hasOwnProperty(key)) {
          const array = userPages[key];
          const element = array.find((i) => i.id === id);

          if (element) {
            element.isLiked = !element.isLiked;
            break;
          }
        }
      }

      if (userLikes.includes(id)) {
        state.userLikes = userLikes.filter((i) => i !== id);
      } else {
        state.userLikes.push(id);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(usersThunk.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(usersThunk.fulfilled, (state, action) => {
        const { data, total_pages } = action.payload;
        const page = action.meta.arg;
        const { userLikes } = state;

        const arr = data.map((i) => ({
          ...i,
          isLiked: userLikes.includes(i.id),
        }));

        state.userPages[page] = arr;
        state.totalPages = total_pages;
        state.lastResponse = arr;
        state.isLoading = false;
      })
      .addCase(usersThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { setPage, changeLike } = usersSlice.actions;

const selectUserPages = (state) => state.users.userPages;

export const selectUsers = createSelector(selectUserPages, (userPages) => {
  return Object.values(userPages).flat();
});

export default usersSlice.reducer;
