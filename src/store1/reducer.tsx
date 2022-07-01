import {
  INCREMENT,
  DECREMENT,
  ADD_NUMBER,
  SUB_NUMBER,
  SAVE_DOLL,
} from "./constants";
interface IIstore {
  counter: number;
  doll: any;
}
const initState: IIstore = {
  counter: 0,
  doll: [],
};
function reducer(state = initState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };

    case SAVE_DOLL:
      return { ...state, doll: action.list };
    default:
      return state;
  }
}
export default reducer;
