import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  msnv: "",
  access_token: "",
  gender: "",
  position: "",
  department: "",
  office: "",
  directManagers: "",
  superiorManagers: "",
  workHours: "",
  isAdmin: false,
};

export const userSlide = createSlice({
  name: "user",
  initialState,
  reducers: {
    updatelUser: (state, action) => {
      const {
        msnv,
        fullName,
        access_token,
        gender,
        position,
        department,
        office,
        directManagers,
        superiorManagers,
        workHours,
        isAdmin,
      } = action.payload;
      state.access_token = access_token;
      state.msnv = msnv;
      state.fullName = fullName;
      state.gender = gender;
      state.position = position;
      state.department = department;
      state.office = office;
      state.directManagers = directManagers;
      state.superiorManagers = superiorManagers;
      state.workHours = workHours;
      state.isAdmin = isAdmin ? isAdmin : state.isAdmin;
    },
    resetUser: (state) => {
      state.access_token = "";
      state.msnv = "";
      state.fullName = "";
      state.gender = "";
      state.position = "";
      state.department = "";
      state.office = "";
      state.directManagers = "";
      state.superiorManagers = "";
      state.workHours = "";
      state.isAdmin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updatelUser, resetUser } = userSlide.actions;

export default userSlide.reducer;
