
import { useState } from "react";
import "./App.css";
import JobListing from "./Pages/JobListing/JobListing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Companies from "./Pages/Companies/Companies";
import Jobdetail from "./Pages/Jobdetail/Jobdetail";
import Saved from "./Pages/Saved/Saved";
import CompanyDetail from "./Pages/CompanyDetail/CompanyDetail";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/companies" element={<Companies />} />

        <Route path="/job-detail" element={<Jobdetail />} />


        <Route path="/company-detail" element={<CompanyDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;