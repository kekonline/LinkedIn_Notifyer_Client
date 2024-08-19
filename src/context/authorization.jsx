import { useState, useEffect, createContext } from "react";
import service from "../services/axiosInstance";
const AuthContext = createContext();

function AuthWrapper(props) {
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    verifyToken();
  }, []);

  const verifyToken = async () => {
    try {
      let authToken = localStorage.getItem("authToken");

      if (!authToken || authToken === "undefined" || authToken === null || authToken === "") {
        const newTokenResponse = await service.get("/gettoken");

        if (newTokenResponse.data.errorMessage) {
          throw new Error(newTokenResponse.data.errorMessage);
        }

        authToken = newTokenResponse.data.authToken;
        localStorage.setItem("authToken", authToken);
      }

      const verifySession = await service.get("/auth/verify");

      setUserId(verifySession.data._id);
      // console.log("Session verified, User ID:", verifySession.data._id);

    } catch (error) {
      console.log("Error verifying token or loading new token: ", error.message);
      setError(error.message);
    }
  };

  const passedContext = {
    userId,
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
