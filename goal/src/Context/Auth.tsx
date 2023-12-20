import axios, {AxiosError} from "axios";
import { createContext, useEffect, useState, ReactNode } from "react";
import { axiosInstance } from "../config";

interface User {
  exp: string;
  token: string;
}

interface AuthContextProps {
  currentUser: User | null;
  login: (isdCode: string, mobileNumber: string, password:string) => void;
  isSubmitDisabled: boolean;
  errorMessage: string;
  logout: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}



export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") as string) || null
  );

  const [isSubmitDisabled, setSubmitDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const login = async (isdCode: string, mobileNumber: string, password:string) => {
    setSubmitDisabled(true);
    setTimeout(() => {
        setSubmitDisabled(false);
      }, 30000);
    setTimeout(() => {
        setErrorMessage('');
      }, 30000);
    try{
        const response = await axiosInstance.post(`users/auth/login/mobile-password?isd_code=${isdCode}&phone=${mobileNumber}&password=${password}`
           );
           setCurrentUser(response.data)
        console.log(response);
        response.data && window.location.replace('/profile')
    }catch(err){
        const axiosError = err as AxiosError<any>;
        if(axiosError.response) console.log(axiosError.response.data.detail);

        console.log(err);
        setErrorMessage(axiosError.response?.data.detail || 'Login failed. Please try again.');
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
    window.location.replace("/login");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser,isSubmitDisabled,errorMessage ,login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};