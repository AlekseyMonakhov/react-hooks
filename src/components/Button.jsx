import React from "react";
import { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
  const [toggler, setToggler] = useState(false);
  const [btnText, setBtnText] = useState(0);
  useImperativeHandle(ref, () => ({
    alterToggler() {
      setToggler(!toggler);
    },
  }));

  return (
    <>
      <button
        onClick={() =>
          setBtnText((prev) => {
            return prev + 1;
          })
        }
      >
        {btnText}
      </button>
      {toggler && <span>Toggler</span>}
    </>
  );
});

export default Button;
