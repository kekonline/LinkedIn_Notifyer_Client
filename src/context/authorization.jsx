import { useState, useEffect, createContext } from "react";
import service from "../services/service.config";
const AuthContext = createContext();

function AuthWrapper(props) {


  useEffect(() => {
    verifyToken();
  }, []);

  const verifyToken = async () => {
    try {
      const verifySession = await service.get("/auth/verify");

      console.log("VerifyData", verifySession)

    } catch (error) {
      console.log("Error Loading Toen: ", error);

    }
  };

  const passedContext = {

    //some data needed

  };

  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthWrapper };
