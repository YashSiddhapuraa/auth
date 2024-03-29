import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signup: (state, action) => {
      console.log(" : SIGNUP : ", " : state : ", state, " : action : ", action);
    },
    login: (state, action) => {
      console.log(" : LOGIN : ", " : state : ", state, " : action : ", action);
    },
  },
});

export const { login, signup } = authSlice.actions;
export default authSlice.reducer;
