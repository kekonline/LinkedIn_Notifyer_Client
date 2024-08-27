import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
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