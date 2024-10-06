import { useContext, ReactNode } from "react";
import { AuthContext } from "../context/authorization";
import { Navigate } from "react-router-dom";

interface KickBackProps {
    userEnrolledStatus: boolean;
    children: ReactNode;
  }
//we use this component to kick back any user that is trying to go to the home screen or out of the main page
function KickBack({ userEnrolledStatus, children }: KickBackProps) {

    const authContext = useContext(AuthContext);

    if (!authContext) {
        // Handle the case where context is not provided
        return <div>Loading...</div>; // Or some fallback component
    }
    const { userEnrolled } = authContext;

    if (userEnrolled === userEnrolledStatus ){
        return children;
    } else {
        return <Navigate to="/joblisting/new" />;
    }
}

export default KickBack;
