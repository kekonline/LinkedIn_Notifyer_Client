import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "../src/components/NavBar";
import KickBack from "../src/components/KickBack";
import JobListing from "../src/pages/JobListing";
import JobSearch from "../src/pages/JobSearch";
import Enroll from "../src/pages/Enroll"
import Home from "../src/pages/Home";
import User from "../src/pages/User";
import ChangePassword from "../src/pages/ChangePassword"
import ActivateUser from "../src/pages/ActivateUser"
import ForgotPassword from "../src/pages/ForgotPassword"
import ResetPassword from "../src/pages/ResetPassword"

const App = () => {

  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <>
      {showNavbar ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joblisting/new" element={<JobListing page="new" />} />
        <Route path="/joblisting/seen" element={<JobListing page="seen" />} />
        <Route path="/joblisting/starred" element={<JobListing page="starred" />} />
        <Route path="/jobsearch" element={<JobSearch />} />
        <Route path="/account/enroll" element={<KickBack userEnrolledStatus={false}><Enroll /> </KickBack>} />
        <Route path="/account/user" element={<KickBack userEnrolledStatus={true} ><User /></KickBack>} />
        <Route path="/account/changepassword" element={<KickBack userEnrolledStatus={true}><ChangePassword /></KickBack>} />
        <Route path="/account/activate/:token" element={<KickBack userEnrolledStatus={true}><ActivateUser /></KickBack>} />
        <Route path="/account/forgotpassword" element={<KickBack userEnrolledStatus={true}><ForgotPassword /></KickBack>} />
        <Route path="/account/resetpassword/:token" element={<KickBack userEnrolledStatus={true}><ResetPassword /></KickBack>} />
      </Routes>
    </>
  )
}

export default App
