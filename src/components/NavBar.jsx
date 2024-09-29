import { useContext } from "react";
import { AuthContext } from "../context/authorization.jsx";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    const { userEnrolled } = useContext(AuthContext);

    return (
        <div className="navBarContainer">
            Nav
            <div>
                <NavLink to="/joblisting/new">
                    Job Listings new
                </NavLink>
            </div>
            <div>
                <NavLink to="/joblisting/seen">
                    Job Listings seen
                </NavLink>
            </div>
            <div>
                <NavLink to="/joblisting/starred">
                    Job Listings starred
                </NavLink>
            </div>
            <div>
                <NavLink to="/jobsearch">
                    Job Search
                </NavLink>
            </div>
            {userEnrolled ? (<div>
                <NavLink to="/account/user" >
                    User
                </NavLink>
            </div>) :
                <div>
                    <NavLink to="/account/enroll" >
                        Enroll
                    </NavLink>
                </div>}
        </div>
    )
}

export default NavBar