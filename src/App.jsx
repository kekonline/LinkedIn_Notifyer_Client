import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "/src/components/NavBar";
import JobListing from "/src/pages/JobListing";
import JobSearch from "/src/pages/JobSearch";
import Auth from "/src/pages/Auth"
import Home from "/src/pages/Home";

const App = () => {

  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <>
      {showNavbar ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joblisting" element={<JobListing />} />
        <Route path="/jobsearch" element={<JobSearch />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/user" element={<JobListing />} />
      </Routes>
    </>
  )
}

export default App
