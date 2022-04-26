import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export function PrivateRoute({ children, ...rest }: RouteProps) {
  const location = useLocation();
  const { token } = useAuth();
  return (
    <Route {...rest}>
      {token ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/registration",
            state: { from: location },
          }}
        />
      )}
    </Route>
  );
}
