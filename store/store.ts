import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";
import { productDetailsReducer } from "./productDetailsSlice";
import { blogsReducer } from "./blogsSlice";
import { blogDetailsReducer } from "./blogPostSlice";

 export const store = configureStore({
  reducer: {
     products: productsReducer,
     productDetails: productDetailsReducer ,
     blogs: blogsReducer,
     blogDetails: blogDetailsReducer 
  },
});

export type RootState = ReturnType<typeof store.getState>


export type AppDispatch = typeof store.dispatch