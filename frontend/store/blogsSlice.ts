import { BlogsState, BlogPost } from "@/InterFaces/Products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "@/app/utils/config";


export const getAllBlogs = createAsyncThunk<BlogPost[], void>(
  "blogs/getAllBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/blogs`);
      return data.data; 
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch blogs");
    }
  }
);


const initialState: BlogsState = {
  blogs: [],
  loading: false,
  error: null,
};


const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload; 
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const blogsReducer = blogsSlice.reducer;
