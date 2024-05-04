import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
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
  },
];

const usersListSlice = createSlice({
  name: "usersList",
  initialState,
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addUser } = usersListSlice.actions;
export default usersListSlice.reducer;
