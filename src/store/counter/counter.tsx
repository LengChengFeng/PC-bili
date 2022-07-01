import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDoll } from "../../network";

interface IIstate {
  counter: number;
  doll: any;
}

export const getDollList = createAsyncThunk("/dools", async (payload: any) => {
  console.log(payload);

  const res = await getDoll(payload);
  return res;
});

const initialState: IIstate = {
  counter: 0,
  doll: [],
};

export const counter = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    add: (state) => {
      console.log(state.counter);

      state.counter++;
    },
    sub: (state) => {
      state.counter -= 1;
    },
  },
  extraReducers(builder) {
    builder.addCase(getDollList.fulfilled, (state, { payload }) => {
      state.doll = payload.data;
    });
  },
});

export const { add, sub } = counter.actions;
export default counter.reducer;
