import { useContext } from "react";
import { AuthContext } from "../context/authorization.jsx";
import { Navigate } from "react-router-dom";

//we use this component to kick back any user that is trying to go to the home screen or out of the main page
function KickBack(props) {
    const { userEnrolled } = useContext(AuthContext);
    if (userEnrolled === props.userEnrolled) {
        return props.children;
    } else {
        return <Navigate to="/joblisting/new" />;
    }
}

export default KickBack;
