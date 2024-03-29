import { createSlice } from "@reduxjs/toolkit";
type authTypes = {
  isAuthenticated: boolean;
  userInfo: {
    email: string;
    name: string;
    contactNumber: string;
    password: string;
  };
};
const initialState: authTypes = {
  isAuthenticated: false,
  userInfo: {
    email: "",
    name: "",
    contactNumber: "",
    password: "",
  },
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
