import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebaseConfig";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setIsLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const socialLoginUser = (provider) => {
    setIsLoading(true);

    return signInWithPopup(auth, provider);
  };
  const logoutUser = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          const email = user.email;
          console.log(email, user.uid);
          setUser(user);
          setIsLoading(false);
        } else {
          setUser(null);
          console.log("user is not sing in ");
          setIsLoading(true);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // onclose.log(auth?.currentUser);
  const values = {
    isLoading,
    user,
    createUser,
    loginUser,
    socialLoginUser,
    logoutUser,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
