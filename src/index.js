import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import moment from "moment";

import "./style.css";
import "./style.scss";
import { getUsers } from "./common/userAPI";

console.log("Hello, World!");

getUsers()
  .then((users) => {
    console.log("Users fetched:", users);
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });

const modernFunction = () => {
  return [1, 2, 3, 4];
};

const [first, second, third, fourth] = modernFunction();
console.log(first, second, third, fourth);

const ReactApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>React App</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const root = createRoot(document.getElementById("react-container"));

root.render(<ReactApp />);
