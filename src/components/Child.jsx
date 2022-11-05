import React, { useState } from "react";
import { useEffect } from "react";

const Child = ({ returnComment }) => {
  const [counter, setCounter] = useState(1);
  console.log("render");
  useEffect(() => {
    console.log("func was called");
  }, [returnComment]);
  return (
    <div>
      <div>{returnComment(` my counter is ${counter}`)}</div>
      <button onClick={() => setCounter(counter + 1)}>change another counter</button>
    </div>
  );
};

export default Child;
