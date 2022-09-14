import "./App.css";
import { useEffect, useRef, useLayoutEffect } from "react";

function App() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  useEffect(() => {
    inputRef.current.value = "hello";
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        value='PEDRO'
      ></input>
    </div>
  );
}

export default App;