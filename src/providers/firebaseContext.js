import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { USER, SERVER_USER } from "./const.js";
import { auth, firebaseAuth } from "../firebase_service/authentication/auth.js";
import { getUser } from "../services/userServices.js";
import { useRole } from "../hooks/useRole.js";
import Skeleton from "react-loading-skeleton";
import NotFoundError from "../exceptions/NotFoundError.js";

const UserContext = createContext({
  firebaseUser: auth.currentUser,
  localFirebaseUser: auth.currentUser,
  serverUser: null,
  setServerUser: () => null,
});

export const withFirebase = (Component) => (props) => {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [localFirebaseUser, setLocalFirebaseUser] = useState(
    JSON.parse(localStorage.getItem(USER))
  );
  const [serverUser, setServerUser] = useState(
    JSON.parse(localStorage.getItem(SERVER_USER))
  );

  const signOutHandler = () => {
    localStorage.removeItem(USER);
    setFirebaseUser(null);
    setLocalFirebaseUser(null);
    setServerUser(null);
  };

  useEffect(
    () =>
      firebaseAuth.onAuthStateChanged(
        auth,
        (firebaseUser) => {
          if (!firebaseUser) {
            signOutHandler();
            return;
          }

          localStorage.setItem(USER, JSON.stringify(firebaseUser));
          setLocalFirebaseUser(firebaseUser);
          setFirebaseUser(firebaseUser);

          firebaseUser
            .getIdToken()
            .then((token) => getUser(token, firebaseUser.email))
            .then((response) => response.json())
            .then((json) => setServerUser(json.data))
            .catch((err) => {
              if (err instanceof NotFoundError) setServerUser(null);
            });
        },
        (err) => {
          signOutHandler();
        }
      ),
    []
  );

  useEffect(() => {
    if (!serverUser) {
      localStorage.removeItem(SERVER_USER);
    } else {
      localStorage.setItem(SERVER_USER, JSON.stringify(serverUser));
    }
  }, [serverUser]);

  return (
    <UserContext.Provider
      value={{
        firebaseUser,
        localFirebaseUser,
        serverUser,
        setServerUser,
      }}
    >
      <Component {...props} />
    </UserContext.Provider>
  );
};

export const withAuthenticated = (Component) => (props) => {
  const navigate = useNavigate();
  const { firebaseUser, localFirebaseUser } = useContext(UserContext);
  useEffect(() => {
    if (!firebaseUser && !localFirebaseUser) {
      navigate("/");
    }
  });
  return firebaseUser ? <Component {...props} /> : <Skeleton />;
};

export const withAuthorized = (condition) => (Component) => (props) => {
  const { firebaseUser } = useContext(UserContext);
  const { loading, role } = useRole(firebaseUser);
  return !loading ? (
    condition(role) ? (
      <Component {...props} />
    ) : (
      <Navigate to="/login" />
    )
  ) : (
    <Skeleton />
  );
};

export default UserContext;
