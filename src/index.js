import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import moment from "moment";

import "./style.css";
import "./style.scss";
const getUsersModule = () =>
  import(/* webpackChunkName: "usersAPI" */ "./common/userAPI");

console.log("Hello, World!");

const loadUsersButton = document.getElementById("load-users-btn");
loadUsersButton.addEventListener("click", () => {
  getUsersModule().then(({ getUsers }) => {
    getUsers().then((json) => console.log(json));
  });
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
