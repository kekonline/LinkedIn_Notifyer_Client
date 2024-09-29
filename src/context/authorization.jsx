import { useState, useEffect, createContext } from "react";
import axiosInstance from "../services/axiosInstance";
const AuthContext = createContext();

function AuthWrapper(props) {
  const [error, setError] = useState(null);
  const [userCheckedIn, setuserCheckedIn] = useState(false);
  const [userEnrolled, setUserEnrolled] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userGetNotifications, setUserGetNotifications] = useState(false);
  const [userIsActive, setUserIsActive] = useState(false);

  useEffect(() => {
    verifyToken();
  }, []);

  const verifyToken = async () => {
    try {
      // console.log("verify token")

      let authToken = localStorage.getItem("authToken");

      if (!authToken || authToken === "undefined" || authToken === null || authToken === "") {
        const newTokenResponse = await axiosInstance.get("auth/gettoken");

        // console.log("newTokenResponse", newTokenResponse)

        if (newTokenResponse.data.errorMessage) {
          throw new Error(newTokenResponse.data.errorMessage);
        }

        authToken = newTokenResponse.data.authToken;
        localStorage.setItem("authToken", authToken);
      }

      const userInfo = await axiosInstance.get("auth/verify");
      // console.log("authToken", authToken)

      if (userInfo.data.error) {
        throw new Error(userInfo.data.errorMessage);
      }


      if (userInfo.data.enrolled) {
        const { email, getNotifications, isActive } = userInfo.data;
        setUserEnrolled(true)
        setUserEmail(email)
        setUserGetNotifications(getNotifications)
        setUserIsActive(isActive)
      }

      setuserCheckedIn(true);

      // console.log("userInfo:", userInfo);

    } catch (error) {
      console.log("Error verifying token or loading new token: ", error.message);
      localStorage.setItem("authToken", "");
      window.location.reload();
      setError(error.message);

    }
  };

  const passedContext = {
    verifyToken,
    userEnrolled,
    setUserEnrolled,
    userCheckedIn,
    setuserCheckedIn,
    userEmail,
    setUserEmail,
    userGetNotifications,
    setUserGetNotifications,
    userIsActive,
    error,
  };

  return (
    <AuthContext.Provider value={passedContext}>
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthWrapper };
