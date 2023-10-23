import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slides/counterSlide";
import userReducer from "./slides/userSlide";
import gatePassReducer from "./slides/gatePassSlide";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    gatePass: gatePassReducer
  },
});
