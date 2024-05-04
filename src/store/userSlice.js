import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "defaultUser",
  username: "Shakil Ahmed",
  email: "shakil@gmail.com",
  password: "shakil@123",
  primaryAddress: {
    id: "defaultAddress",
    name: "Shakil Ahmed",
    firstLine: "Jashimuddin",
    secondLine: "Uttara",
    city: "Dhaka",
    pincode: 1230,
    mobile: +8801303263591,
  },
  addressList: [
    {
      id: "defaultAddress",
      name: "Shakil Ahmed",
      firstLine: "Jashimuddin",
      secondLine: "Uttara",
      city: "Dhaka",
      pincode: 1230,
      mobile: +8801303263591,
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser(state, action) {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state["primaryAddress"] = {};
      state["addressList"] = [];
    },

    addAddressItem(state, action) {
      state.addressList.unshift(action.payload);
    },

    removeAddressItem(state, action) {
      state.addressList = state.addressList.filter(
        (item) => item.id !== action.payload
      );

      if (action.payload === state.primaryAddress.id) {
        state.primaryAddress = state.addressList[0];
      }
    },

    editAddressItem(state, action) {
      state.addressList = state.addressList.map((item) => {
        if (action.payload.id === item.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
    },

    setPrimaryAddress(state, action) {
      state.primaryAddress = action.payload;
    },
  },
});

export const {
  setActiveUser,
  addAddressItem,
  removeAddressItem,
  editAddressItem,
  setPrimaryAddress,
} = userSlice.actions;
export default userSlice.reducer;
