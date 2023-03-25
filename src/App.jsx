import "./App.css";
import Button from "./components/Button";
import { useRef } from "react";

function App() {
  const ref = useRef(null);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        alignItems: "center",
        margin: "0 auto",
        gap: "10px",
      }}
    >
      <button onClick={() => ref.current.alterToggler()}>
        Button from parent
      </button>
      <Button ref={ref} />
    </div>
  );
}

export default App;
