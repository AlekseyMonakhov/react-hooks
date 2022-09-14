import React from "react";
import { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
  const [toggler, setToggler] = useState(false);
  useImperativeHandle(ref, () => ({
    alterToggler() {
      setToggler(!toggler);
    },
  }));

  return (
    <>
      <button>Button from child</button>
      {toggler && <span>Toggler</span>}
    </>
  );
});

export default Button;
