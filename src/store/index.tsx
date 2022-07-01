import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./userInfoSlice";
import counter from "./counter/counter";

export default configureStore({
  reducer: {
    userInfo,
    counter,
  },
});
