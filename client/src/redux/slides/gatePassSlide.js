import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: '',
  msnv: '',
  office: '',
  from: {
    date: '',
    time: ''
  },
  to: {
    date: '',
    time: ''
  },
  reason: '',
  assetOut: true,
  assetDescription: '',
  assetImage: null,
  approval: '',
  status: 'Chờ xử lý',
};

export const gatePassSlice = createSlice({
  name: "gatePass",
  initialState,
  reducers: {
    updateGatePassField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    updateFromDate: (state, action) => {
      state.from.date = action.payload;
    },
    updateFromTime: (state, action) => {
      state.from.time = action.payload;
    },
    updateToDate: (state, action) => {
      state.to.date = action.payload;
    },
    updateToTime: (state, action) => {
      state.to.time = action.payload;
    },
    resetGatePass: (state) => {
      return initialState;
    }
  },
});

export const {
  updateGatePassField,
  updateFromDate,
  updateFromTime,
  updateToDate,
  updateToTime,
  resetGatePass,  
} = gatePassSlice.actions;

export default gatePassSlice.reducer;
