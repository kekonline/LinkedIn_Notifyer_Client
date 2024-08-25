import { Routes, Route } from "react-router-dom";
import Home from "/pages/Home";
import JobListing from "/pages/JobListing";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joblisting" element={<JobListing />} />
      </Routes>
    </>
  )
}

export default App
