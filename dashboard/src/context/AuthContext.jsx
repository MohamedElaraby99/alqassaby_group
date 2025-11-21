import axios from "axios";
import React, { createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {

  
  async function registerUser({ name, email, password, role = "user" }) {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        { name, email, password, role }
      );
   
      
       if (data?.data?.token) {

        localStorage.setItem("token", data.data.token);
      }
      console.log(data);
      
      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Registration failed",
      };
    }
  }

    async function loginUser({ email, password}) {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        {  email, password }
      );
   
      
       if (data?.data?.token) {

        localStorage.setItem("token", data.data.token);
      }
      console.log(data);
      
      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Registration failed",
      };
    }
  }

  function logOut(){
     localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ registerUser , loginUser , logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
