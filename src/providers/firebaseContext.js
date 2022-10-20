import { createContext, useEffect, useState } from 'react';
import { USER, SERVER_USER } from './const.js';
import { auth, firebaseAuth } from '../firebase_service/authentication/auth.js';

export const UserContext = createContext({
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
          setServerUser(firebaseUser);
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
