import { useNavigate, useLocation } from 'react-router-dom';
import React, {
  useMemo,
  ReactNode,
  useEffect,
  useState,
  createContext,
  useContext,
} from 'react';
import { serviceUser, serviceSession } from '@/services';

type UserType = { email: string };
interface AuthContextType {
  // We defined the user type in `index.d.ts`, but it's
  // a simple object with email, name and password.
  user?: UserType;
  loading: boolean;
  error?: any;
  login: (email: string, password: string) => void;
  signUp: (email: string, name: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [user, setUser] = useState<UserType>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
  // We are using `react-router` for this example,
  // but feel free to omit this or use the
  // router of your choice.
  const navigate = useNavigate();
  const location = useLocation();
  // If we change page, reset the error state.
  useEffect(() => {
    if (error) setError(null);
  }, [location.pathname]);

  // Check if there is a currently active session
  // when the provider is mounted for the first time.
  //
  // If there is an error, it means there is no session.
  //
  // Finally, just signal the component that the initial load
  // is over.
  useEffect(() => {
    serviceUser
      .getCurrentUser()
      .then((user) => setUser(user))
      .catch((error) => {})
      .finally(() => setLoadingInitial(false));
  }, []);

  // Flags the component loading state and posts the login
  // data to the server.
  //
  // An error means that the email/password combination is
  // not valid.
  //
  // Finally, just signal the component that loading the
  // loading state is over.
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    return serviceSession
      .login({ email, password })
      .then((newUser) => {
        setUser(newUser);
        const origin = location.state?.from?.pathname || '/';
        return navigate(origin);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    setUser(undefined);
  };

  // Make the provider update only when it should.
  // We only want to force re-renders if the user,
  // loading or error states change.
  //
  // Whenever the `value` passed into a provider changes,
  // the whole tree under the provider re-renders, and
  // that can be very costly! Even in this case, where
  // you only get re-renders when logging in and out
  // we want to keep things very performant.
  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      logout,
    }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
