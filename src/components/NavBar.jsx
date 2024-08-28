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
                <NavLink to="/addjob">
                    Add A Job
                </NavLink>
            </div>
            <div>
                <NavLink to="/" >
                    Get Notifyed / Register
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar