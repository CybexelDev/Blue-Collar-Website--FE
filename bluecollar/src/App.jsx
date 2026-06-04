
import { useState } from "react";
import "./App.css";
import Companies from "./Pages/Companies/Companies";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import JobSearchHero from './Layout/Home/Hero/HomeBanner'
import Jobdetail from "./Pages/Jobdetail/Jobdetail";
import Saved from "./Pages/Saved/Saved";
import CompanyDetail from "./Pages/CompanyDetail/CompanyDetail";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Home /> */}
      {/* <Companies /> */}
      {/* <Jobdetail /> */}
      <Saved />

  
      <CompanyDetail/>

    </>
  );
}

export default App;
