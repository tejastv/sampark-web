import React, { createContext, useContext, useState, ReactNode } from 'react';

// Placeholder types - replace with actual user/session types
type AuthContextType = {
  user: any | null;
  login: (data: any) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulate async auth operations
  const login = async (data: any) => {
    setLoading(true);
    console.log("Simulating login with", data)
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setUser({ id: '1', name: 'Test User' }); // Placeholder user
    setLoading(false);
  };

  const logout = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
    setUser(null);
    setLoading(false);
  };

  // Initial check for user (e.g., from localStorage) could go here
  React.useEffect(() => {
    setLoading(false); // Finish initial loading
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
