import { Routes, Route } from "react-router-dom";
import NavBar from "/src/components/NavBar";
import JobListing from "/src/pages/JobListing";
import Home from "/src/pages/Home";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joblisting" element={<JobListing />} />
      </Routes>
    </>
  )
}

export default App
