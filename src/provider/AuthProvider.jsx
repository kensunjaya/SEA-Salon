import { useEffect, useState, ReactNode } from "react";
import { AuthContext } from '../context/AuthContext'
import { auth } from "../firebaseSetup";
import { onAuthStateChanged } from "firebase/auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({
    name: "Not Signed In",
    email:"null@mail.com",
    phone: "000000000",
    role: "Customer",
    uid: "000000000000000000000000"
  });

  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={{ userData, user, setUserData, setAdmin, admin }}>{children}</AuthContext.Provider>;
};