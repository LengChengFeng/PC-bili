import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfo } from "../network";
const initialState = {
  userInfo: {},
};

export const getInfoData = createAsyncThunk("info", async (id) => {
  const res = await getUserInfo(id);
  return res;
});

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    saveUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
    removeUserInfo: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(getInfoData.fulfilled, (state, { payload }) => {
      state.userInfo = payload.data[0];
    });
  },
});

export const { saveUserInfo, removeUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
