import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    firstName: "",
    lastName: "",
  },
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
