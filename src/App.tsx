import React from "react";
import { Counter } from "./components/features/counter/Counter";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
};

export default App;
