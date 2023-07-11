import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from '../api/auth-api';
import { REGISTER_INPUTS, TOKEN } from '../constants/constants';

const { userName, email, password } = REGISTER_INPUTS;
const initError = {
  [userName]: '',
  [email]: '',
  [password]: '',
};

export const registerThunk = createAsyncThunk(
  'register/registerThunk',
  async (data, { getState, rejectWithValue }) => {
    const { formOutErrors } = getState().auth;

    try {
      const res = await authApi.register(data);

      if (res.token) {
        localStorage.setItem(TOKEN, res.token);
        return res.token;
      }

      throw new Error('Недопустимое значение токена');
    } catch (error) {
      if (error.message === 'Note: Only defined users succeed registration') {
        return rejectWithValue({
          ...formOutErrors,
          [email]: 'Введите допустимый email - eve.holt@reqres.in',
        });
      }

      console.error(error);

      return rejectWithValue(formOutErrors);
    }
  }
);

const initialState = {
  isLogged: !!localStorage.getItem(TOKEN),
  isLoading: false,
  formOutErrors: initError,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogged: (state) => {
      state.isLogged = true;
    },
    logout: (state) => {
      state.isLogged = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
        state.formOutErrors = initError;
      })
      .addCase(registerThunk.fulfilled, (state) => {
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        if (state.formOutErrors !== action.payload) {
          state.formOutErrors = action.payload;
        }
        state.isLoading = false;
      });
  },
});

export const { logout, setLogged } = authSlice.actions;

export default authSlice.reducer;
