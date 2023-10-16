import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: '',
  msnv: '',
  access_token: '',
};

export const userSlide = createSlice({
  name: "user",
  initialState,
  reducers: {
    updatelUser: (state, action) => {
      const { msnv,fullName, access_token, gender,position, department, office } = action.payload;
      state.access_token = access_token;
      state.msnv = msnv;
      state.fullName = fullName;
      state.gender = gender;
      state.position = position;
      state.department = department;
      state.office = office;
    }
  },
});

// Action creators are generated for each case reducer function
export const { updatelUser } = userSlide.actions;

export default userSlide.reducer;
