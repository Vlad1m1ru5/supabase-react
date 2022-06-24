import { useState } from "react";
import logo from "./logo.svg";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <header className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-[calc(10px_+_2vmin)] text-white">
        <img
          src={logo}
          className="pointer-events-none h-[40vmin] motion-safe:animate-[spin_infinite_20s_linear]"
          alt="logo"
        />
        <p>Hello Vite + React!</p>
        <p>
          <button
            className="text-[calc(10px_+_2vmin)]"
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-[#61dafb]"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="text-[#61dafb]"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
