import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { statusCode } from "../utils/statusCode";
import { productsList } from "../eyesomeData";

const initialState = {
  data: {},
  status: statusCode.idle,
};

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetails.pending, (state, action) => {
        state.status = statusCode.pending;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.status = statusCode.failure;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.status = statusCode.success;
        state.data = action.payload;
      });
  },
});

export const getProductDetails = createAsyncThunk(
  "productDetails/get",
  async (id) => {
    const response = await fetch("https://dummyjson.com/products/1");
    if (response.ok) {
      return productsList.find((product) => product.id === id);
    }
  }
);

export default productDetailsSlice.reducer;
