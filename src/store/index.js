import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/usersSlice";
import  projectsSlice  from "./slices/projectsSlice";

export const store = configureStore({
  reducer: {
    users,
    projects: projectsSlice
  },
});
