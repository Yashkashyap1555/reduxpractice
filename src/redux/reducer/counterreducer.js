import { decriment, increment } from "../actiontype";

const initialStore = {
  counter: 0,
};
const count = (state = initialStore, action) => {
  switch (action.type) {
    case increment:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case decriment:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default count;
