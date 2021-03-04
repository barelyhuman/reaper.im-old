import useAuthenticated from 'hooks/use-authenticated';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function withAuthenticationCheck(Component) {
  const WrappedComponent = () => {
    const [loggedIn] = useAuthenticated();
    const router = useRouter();

    useEffect(() => {
      if (loggedIn === false) {
        //   TODO: add toast as unauthenticated access
        router.push('/');
      }
    }, [loggedIn]);

    if (!loggedIn) {
      return <></>;
    }

    return (
      <>
        <Component />
      </>
    );
  };

  return WrappedComponent;
}
