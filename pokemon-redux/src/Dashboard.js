import { useState } from "react";

function MyComponent() {
  const [startIndex, setStartIndex] = useState(0);
  const myArray = ["First", "Second", "Third", "Fourth", "Fifth"];

  const handleClick = () => {
    setStartIndex(1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <ul>
        {myArray.map((item, index) => {
          const actualIndex = index + startIndex;
          return (
            <li key={index}>
              {actualIndex}: {myArray[actualIndex]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MyComponent;
// import React from "react";
// import { Outlet } from "react-router-dom";

// function Dashboard() {
//   return (
//     <div>
//       <Outlet />
//     </div>
//   );
// }

// export default Dashboard;
