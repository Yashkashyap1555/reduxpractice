import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterIncrement } from "../redux/action";

const Counter = () => {
  const dispatch = useDispatch();
  const res = useSelector((state)=>state)
  console.log(res,"res")
  
 
  const Counts = () => {
    dispatch(counterIncrement());
  };
  return (
    <div>
      {res?.count?.counter}
      <div>
        <button onClick={Counts}>click </button>
      </div>
    </div>
  );
};
export default Counter;
