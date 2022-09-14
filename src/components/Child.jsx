import React from "react";
import { useEffect } from "react";

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("func was called");
  }, [returnComment]);
  return <div>{returnComment("AAlekse")}</div>;
};

export default Child;
