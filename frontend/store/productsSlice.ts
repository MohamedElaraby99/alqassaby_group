import { ProductsState } from "@/InterFaces/Products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "@/app/utils/config";



export const getProducts = createAsyncThunk( "products/getProducts", async () => {
   try { 
    const {data} = await axios.get(`${API_BASE_URL}/products`);
    return data 
  } 
  catch (error){
    throw error
  } 
});
const initialState: ProductsState ={
  products: [],
  loading: false,
  error: null
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch products";
      });
  },
});

export const productsReducer = productsSlice.reducer;
