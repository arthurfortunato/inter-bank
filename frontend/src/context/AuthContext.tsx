import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import {
  ISignInData,
  ISignUpData,
  me,
  signIn,
  signUp,
} from "../services/resources/user";

interface IUserDto {
  id: string;
  firstName: string;
  lastName: string;
  accountNumber: number;
  accountDigit: number;
  wallet: number;
  email: string;
}

interface IContextData {
  user: IUserDto | null;
  UserSignIn: (userData: ISignInData) => Promise<IUserDto>;
  UserSignUp: (userData: ISignUpData) => Promise<IUserDto>;
  getCurrentUser: () => Promise<IUserDto>;
  Logout: () => void;
}

const AuthContext = createContext<IContextData>({} as IContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUserDto | null>(() => {
    const user = localStorage.getItem("@InterDev:User");

    if (user) {
      return JSON.parse(user);
    }

    return {} as IUserDto;
  });

  const UserSignIn = async (userData: ISignInData) => {
    const { data } = await signIn(userData);
    if (data?.status === "error") {
      return data;
    }
    if (data.accessToken) {
      localStorage.setItem("@InterDev:Token", data.accessToken);
    }
    return getCurrentUser();
  };

  const UserSignUp = async (userData: ISignUpData) => {
    const { data } = await signUp(userData);
    localStorage.setItem("@InterDev:Token", data.accessToken);
    return getCurrentUser();
  };

  //salvar usuário
  const getCurrentUser = async () => {
    const { data } = await me();
    setUser(data);
    localStorage.setItem("@InterDev:User", JSON.stringify(data));
    return data as IUserDto;
  };

  function Logout() {
    setUser(null);
    localStorage.removeItem("@InterDev:Token");
    localStorage.removeItem("@InterDev:User");
  }

  return (
    <AuthContext.Provider
      value={{ user, UserSignIn, UserSignUp, getCurrentUser, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
