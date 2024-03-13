import { decriment, increment } from "./actiontype";

export const counterIncrement = (data) => {
  return {
    type: increment,
    payload: data,
  };
};

export const counterDecreement = () => {};
