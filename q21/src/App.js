import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
      {count}
    </div>
  );
}

export default App;
