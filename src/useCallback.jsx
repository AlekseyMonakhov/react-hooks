// import "./App.css";
// import { useCallback, useState } from "react";
// import Child from "./components/Child";

// function App() {
//   const [toggler, setToggler] = useState(false);
//   const [data, setData] = useState("Hello");

//   const returnComment = useCallback(
//     (name) => {
//       return data + name;
//     },
//     [data]
//   );

//   return (
//     <div>
//       <Child returnComment={returnComment} />
//       <button onClick={() => setToggler(!toggler)}>Toggle</button>
//       {toggler && <h1>Toggle</h1>}
//     </div>
//   );
// }

// export default App;
