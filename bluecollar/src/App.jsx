import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Home from "./Pages/Home/Home";
import Companies from "./Pages/Companies/Companies";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Companies />
    </>
  );
}

export default App;
