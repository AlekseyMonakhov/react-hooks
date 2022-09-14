// import "./App.css";
// import { useState, useEffect, useMemo } from "react";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState(null);
//   const [toggler, setToggler] = useState(false);
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/comments")
//       .then((resp) => setData(resp.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const findLongestName = (comments) => {
//     if (!comments) return null;
//     let longestName = "";
//     for (let i = 0; i < comments.length; i++) {
//       let currentName = comments[i].name;
//       if (currentName.length > longestName.length) {
//         longestName = currentName;
//       }
//     }
//     console.log("hello");
//     return longestName;
//   };

//   const getLongestName = useMemo(() => findLongestName(data), [data]);
//   return (
//     <div>
//       <div>{getLongestName}</div>
//       <button onClick={() => setToggler(!toggler)}>Toogle</button>
//       {toggler && <h1>TogglerF</h1>}
//     </div>
//   );
// }

// export default App;
