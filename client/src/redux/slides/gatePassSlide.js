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
  loading: false,
  error: null
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
    },
    createGatePassSuccess: (state, action) => {
      state.loading = false;
    },
    createGatePassError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  updateGatePassField,
  updateFromDate,
  updateFromTime,
  updateToDate,
  updateToTime,
  resetGatePass,
  createGatePassSuccess,
  createGatePassError
} = gatePassSlice.actions;

export default gatePassSlice.reducer;
