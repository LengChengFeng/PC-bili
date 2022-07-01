import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  SAVE_DOLL,
} from "./constants";
import { getDoll } from "../network";

export const addNumber = (num) => {
  return {
    type: ADD_NUMBER,
    num,
  };
};

export const subNumber = (num) => {
  return {
    type: SUB_NUMBER,
    num,
  };
};
export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

const dollList = (list) => ({
  type: SAVE_DOLL,
  list,
});

export const saveDoll = (dispatch) => {
  console.log(dispatch);

  getDoll({ offset: 0, limit: 10 }).then((res) => {
    console.log(res);
    dispatch(dollList(res.data));
  });
};
