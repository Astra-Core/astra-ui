import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { apiClient } from "../utils/apiClient";
import { User } from "../types/User";


interface AuthContextType {
  isAuthenticated: boolean | null;
  checkAuth: () => Promise<void>;
  logout: () => void;
  user: User | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const checkAuth = useCallback(async () => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];

    if (!token) {
      setIsAuthenticated(false);
      setUser(null);
      return;
    }

    try {
      const response = await apiClient.post("/auth/validate-token", null, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsAuthenticated(true);
      setUser(response.data);
    } catch {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, []);

  const logout = useCallback(() => {
    document.cookie =
      "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  useEffect(() => {
    let mounted = true;
    const initialize = async () => {
      if (!mounted) return;
      await checkAuth();
    };
    initialize();
    return () => {
      mounted = false;
    };
  }, [checkAuth]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, checkAuth, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
