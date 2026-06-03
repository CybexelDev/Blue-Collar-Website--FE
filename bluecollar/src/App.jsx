
import { useState } from "react";
import "./App.css";
import Companies from "./Pages/Companies/Companies";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import JobSearchHero from './Layout/Home/Hero/HomeBanner'
import AdsSection from './Components/Home/AdsSection/AdsSection'
import Footer from './Components/Footer/Footer'
import JobSearchFilter from './Layout/CompaniesListing/SearchFilteringBanner/SearchFilteringBanner'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Companies />

      {/* <Navbar/> */}
      {/* <JobSearchHero/>
      <AdsSection/>
      <Footer/> */}
    <JobSearchFilter/>

    </>
  );
}

export default App;
