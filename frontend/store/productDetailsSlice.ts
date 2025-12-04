import { ProductsState } from "@/InterFaces/Products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getSpaceficProduct = createAsyncThunk( "productDetails/getSpaceficProduct", async ( id: string) => {
   try { 
    const {data} = await axios.get(`http://localhost:5000/api/products/${id}`);
    return data 
  } 
  catch (error){
    throw error
  } 
});
const initialState: ProductsState ={
  product: null,
  loading: false,
  error: null
}

const productsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSpaceficProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSpaceficProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload.data;
      })
      .addCase(getSpaceficProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch products";
      });
  },
});

export const productDetailsReducer = productsSlice.reducer;
