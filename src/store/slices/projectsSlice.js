import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../lib/api";

const initialState = {
    projects: {
        isLoading: false,
        data: [],
        isError: false
    },
};

export const fetchProjects = createAsyncThunk("fetchProjects", async () => {
    const res = await api.get('/api/jobPost/getJobPosts');
    return res?.json();
 });

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state, action) => {
     state.isLoading = true;
    })
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
     state.isLoading = false;
     state.data = action.payload;
    })
    builder.addCase(fetchProjects.rejected, (state, action) => {
     state.isError = true;
     state.isLoading = false;

    })
   }
});

export default projectsSlice.reducer;
