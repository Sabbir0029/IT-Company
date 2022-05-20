import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import InitializeFirebase from "../pages/Authentication/Firebase/InitializeFirebase";

InitializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  // register function
  const register = (email, password, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        saveUser(email, "POST");
        history.replace("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // LogIn User Function
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // On Auth State Changed
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, []);

  // Admin
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  // LogOut function
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  //
  const saveUser = (email, method) => {
    const user = { email };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    isLoading,
    error,
    admin,
    register,
    logOut,
    loginUser,
  };
};
export default useFirebase;
