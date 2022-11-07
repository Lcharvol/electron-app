import {
  Routes,
  Route,
  NavLink,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import React, { useState, createContext } from 'react';
import { fakeApi } from '@/faker';

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState<string | null>(null);

  const login = async () => {
    fakeApi
      .login()
      .then((newToken) => {
        setToken(newToken);
        const origin = location.state?.from?.pathname || '/dashboard';
        return navigate(origin);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    setToken(null);
  };

  const value = {
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
