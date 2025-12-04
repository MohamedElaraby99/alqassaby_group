// store/blogDetailsSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BlogPost } from "@/InterFaces/Products";

interface BlogDetailsState {
  blog: BlogPost | null;
  loading: boolean;
  error: string | null;
}


import { API_BASE_URL } from "@/app/utils/config";

export const getBlogById = createAsyncThunk(
  "blogs/getBlogById",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/blogs/${id}`);
      return data; 
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch blog");
    }
  }
);

const initialState: BlogDetailsState = {
  blog: null,
  loading: false,
  error: null,
};

const blogDetailsSlice = createSlice({
  name: "blogDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.blog = null;
      })
      .addCase(getBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.blog = action.payload.data || action.payload;
      })
      .addCase(getBlogById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const blogDetailsReducer = blogDetailsSlice.reducer;
