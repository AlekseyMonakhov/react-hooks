// import "./App.css";
// import { useReducer } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "togleShowText":
//       return { ...state, showText: !state.showText };
//     default:
//       return state;
//   }
// };

// function App() {
//   const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         gap: "15px",
//         fontSize: "22px",
//         fontWeight: "bold",
//       }}
//     >
//       {state.count}
//       <button
//         style={{ padding: "10px" }}
//         onClick={() => {
//           dispatch({ type: "INCREMENT" });
//           dispatch({ type: "togleShowText" });
//         }}
//       >
//         Increase
//       </button>
//       {state.showText && <p>Text is here</p>}
//     </div>
//   );
// }

// export default App;
