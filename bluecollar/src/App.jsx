import { useState } from "react";
import "./App.css";
import Companies from "./Pages/Companies/Companies";
import heroImg from './assets/hero.png'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import JobSearchHero from './Layout/Home/Hero/HomeBanner'



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      {/* <Companies /> */}

  

      {/* <Home /> */}
      <Companies />
    </>
  );
}

export default App;
