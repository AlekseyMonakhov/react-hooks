// import "./App.css";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState([]);
//   const [count, setCount] = useState(1);
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/comments")
//       .then((res) =>
//         setData(
//           res.data.slice(0, count).map((el) => {
//             return el.count ? el : { ...el, count: count };
//           })
//         )
//       )
//       .catch((err) => console.log(err));
//     console.log("API CALLED");
//   }, [count]);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         gap: "5px",
//         alignItems: "center",
//       }}
//     >
//       <button onClick={() => setCount(count + 1)}>count number {count}</button>
//       {data.map((el) => (
//         <React.Fragment key={el.id}>
//           <h2>Count number {el.id}</h2>
//           <h3
//             style={{
//               borderBottom: "1px solid gray",
//               width: "50%",
//               padding: "10px",
//               textAlign: "left",
//             }}
//           >
//             {el.name}
//           </h3>
//           <p>{el.email}</p>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }

// export default App;
