import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "pink", color: "black" }}
            onClick={() => setColor("Pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Green" }}
            onClick={() => setColor("Green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Dodgerblue" }}
            onClick={() => setColor("Dodgerblue")}
          >
            Dodgerblue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("Blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
