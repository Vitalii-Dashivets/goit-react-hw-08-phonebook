import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';
const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.pending](state) {
      state.isLoading = true;
    },
    [register.rejected](state, payload) {
      state.isLoading = false;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logIn.pending](state) {
      state.isLoading = true;
    },
    [logIn.rejected](state) {
      state.isLoading = false;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOut.pending](state) {
      state.isLoading = true;
    },
    [logOut.rejected](state) {
      state.isLoading = false;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.isLoading = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.isLoading = true;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
      state.isLoading = false;
    },
  },
});
export const authReducer = authSlice.reducer;
