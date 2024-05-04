import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { statusCode } from "../utils/statusCode";
import { productsList } from "../eyesomeData";

const initialState = {
  data: [],
  status: statusCode.idle,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = statusCode.pending;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = statusCode.failure;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = statusCode.success;
        state.data = action.payload;
      });
  },
});

export const getProducts = createAsyncThunk("products/get", async () => {
  const response = await fetch("https://dummyjson.com/products/1");
  if (response.ok) {
    return productsList;
  }
});

export default productsSlice.reducer;
