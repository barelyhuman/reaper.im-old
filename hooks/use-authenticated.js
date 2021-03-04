import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useAuthenticated() {
  const [loggedIn, setLoggedIn] = useState(null);
  useEffect(() => {
    revalidate();
  }, []);

  function revalidate() {
    axios
      .get('/api/auth/me')
      .then((response) => {
        if (response.data.success) {
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setLoggedIn(false);
        }
      });
  }

  return [loggedIn, revalidate];
}
