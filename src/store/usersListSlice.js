import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "defaultUser",
    username: "Robin Johanson",
    email: "robin@rediffmail.com",
    password: "robin@123",
    primaryAddress: {
      id: "defaultAddress",
      name: "Robin Johanson",
      firstLine: "A9-23, West Zone",
      secondLine: "Alpha Lane",
      city: "NewJersy",
      pincode: 442200,
      mobile: 9454545450,
    },
    addressList: [
      {
        id: "defaultAddress",
        name: "Robin Johanson",
        firstLine: "A9-23, West Zone",
        secondLine: "Alpha Lane",
        city: "NewJersy",
        pincode: 442200,
        mobile: 9454545450,
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
