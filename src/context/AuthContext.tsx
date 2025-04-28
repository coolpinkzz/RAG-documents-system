import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/router";
import {
  User,
  LoginCredentials,
  RegisterCredentials,
  IUserResponse,
} from "@/types";
import { fetchWithAuth } from "@/lib/api";

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function loadUserFromSession() {
      try {
        const response = await fetchWithAuth<User>("/api/user");
        if (response.success && response.data) {
          setUser(response.data);
        }
      } catch (error) {
        console.error("Failed to load user session", error);
      } finally {
        setLoading(false);
      }
    }

    //loadUserFromSession();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);

    try {
      const fetchUser = await fetchWithAuth<IUserResponse>("/api/login", {
        method: "POST",
        body: JSON.stringify(credentials),
      });

      const response = fetchUser.data;

      if (fetchUser.success && response) {
        setUser(response.data);

        if (response.data.role === "admin") {
          setIsAdmin(true);
        }
        router.push("/");
      } else {
        setError(fetchUser.error || "Login failed");
        throw new Error(fetchUser.error || "Login failed");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (credentials: RegisterCredentials) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchWithAuth<User>("/api/register", {
        method: "POST",
        body: JSON.stringify(credentials),
      });

      if (response.success && response.data) {
        setUser(response.data);
        router.push("/");
      } else {
        setError(response.error || "Registration failed");
        throw new Error(response.error || "Registration failed");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);

    try {
      const response = await fetchWithAuth("/api/logout", {
        method: "POST",
      });

      if (response.success) {
        setUser(null);
        setIsAdmin(false);
        router.push("/auth");
      } else {
        setError(response.error || "Logout failed");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === "admin",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
