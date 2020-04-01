import { useState, useEffect } from 'react';

const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

const useAuthentication = () => {
  const [authenticated, setAuthenticated] = useState('loading');

  const login = () => {
    auth.signInWithPopup(provider);
  };

  const logout = () => {
    auth
      .signOut()
      .then(function() {})
      .catch(function(error) {
        console.log(error);
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged(
      function(user) {
        if (user) {
          setAuthenticated(user);
        } else {
          setAuthenticated();
        }
      },
      function(error) {
        console.log(error);
      }
    );
  }, []);

  return { login, logout, loggedIn: authenticated };
};

export default useAuthentication;
