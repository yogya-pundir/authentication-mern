import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialState = { username: "", email: "" };
const authSlice = createSlice({
  name: "auth_",
  initialState: initialState,
  reducers: {
    setAuthState(state, action) {
        console.log('payload',action.payload);
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
  },
});

const store = configureStore({
  reducer: { auth: authSlice.reducer },
});

export const authActions = authSlice.actions;
export default store;


