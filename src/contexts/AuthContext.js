import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (from localStorage)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password, role) => {
    // TODO: Replace with actual API call
    try {
      // Check for admin credentials
      if (email === 'admin@gmail.com' && password === 'admin123') {
        const adminUser = {
          id: 'admin-1',
          name: 'Admin User',
          email: email,
          role: 'admin',
          grade: null,
          school: 'SundarSTEM School',
          programs: [],
          avatar: null,
        };

        setUser(adminUser);
        localStorage.setItem('user', JSON.stringify(adminUser));
        localStorage.setItem('token', 'admin-jwt-token');
        return { success: true, user: adminUser };
      }

      // Simulate API call for other users
      const mockUser = {
        id: '1',
        name: 'Ahmed Khan',
        email: email,
        role: role,
        grade: role === 'student' ? '5' : null,
        school: 'Beaconhouse School System',
        programs: ['RMC', 'PMC'],
        avatar: null,
      };

      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('token', 'mock-jwt-token');
      return { success: true, user: mockUser };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
