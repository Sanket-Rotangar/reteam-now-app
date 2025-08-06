// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser, registerUser } from '../services/authService';

type AuthContextType = {
  userToken: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (fname: string, lname: string, username: string, email: string, password: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  userToken: null,
  login: async () => {},
  logout: () => {},
  register: async () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [userToken, setUserToken] = useState<string | null>(null);

  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) setUserToken(token);
    };
    loadToken();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await loginUser(email, password);
    console.log('TOKEN:', res.token);
    setUserToken(res.token);
    await AsyncStorage.setItem('userToken', res.token);
  };

  const logout = async () => {
    setUserToken(null);
    await AsyncStorage.removeItem('userToken');
  };

  const register = async (fname: string, lname: string, username: string, email: string, password: string) => {
    await registerUser(fname, lname, username, email, password);
  };

  return (
    <AuthContext.Provider value={{ userToken, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
