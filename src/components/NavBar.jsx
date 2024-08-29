import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className="navBarContainer">
            Nav
            <div>
                <NavLink to="/joblisting">
                    Job Listings
                </NavLink>
            </div>
            <div>
                <NavLink to="/jobsearch">
                    Job Search
                </NavLink>
            </div>
            <div>
                <NavLink to="/auth" >
                    Get Notifyed / Register
                </NavLink>
            </div>
            <div>
                <NavLink to="/user" >
                    Get Notifyed / Register
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar