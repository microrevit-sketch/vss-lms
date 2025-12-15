import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Login from './pages/auth/Login';
import StudentDashboard from './pages/student/StudentDashboard';
import Practice from './pages/student/Practice';
import PracticeSet from './pages/student/PracticeSet';
import AdminDashboard from './pages/admin/AdminDashboard';
import AddQuestion from './pages/admin/AddQuestion';
import Home from './pages/public/Home';
import RMC from './pages/public/RMC';
import PMC5 from './pages/public/PMC5';
import VSS from './pages/public/VSS';
import ILM from './pages/public/ILM';
import Registration from './pages/public/Registration';
import RMCMembership from './pages/public/RMCMembership';
import './App.css';
import './sundarstem.css';

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// Landing Page Component
const LandingPage = () => {
  const { user } = useAuth();

  if (user) {
    // Redirect based on role
    switch (user.role) {
      case 'admin':
        return <Navigate to="/admin/dashboard" replace />;
      case 'student':
        return <Navigate to="/student/dashboard" replace />;
      case 'teacher':
        return <Navigate to="/teacher/dashboard" replace />;
      case 'school':
        return <Navigate to="/school/dashboard" replace />;
      default:
        return <Navigate to="/login" replace />;
    }
  }

  return <Home />;
};

function AppContent() {
  const { user } = useAuth();

  return (
    <div className="app">
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rmc" element={<RMC />} />
        <Route path="/pmc-5" element={<PMC5 />} />
        <Route path="/vss" element={<VSS />} />
        <Route path="/ilm" element={<ILM />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/rmc-register" element={<RMCMembership />} />

        {/* Student Routes */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/practice"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <Practice />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/practice/set/:id"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <PracticeSet />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/questions/add"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AddQuestion />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/questions"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">Manage Questions - Coming Soon</h1>
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">Manage Users - Coming Soon</h1>
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/analytics"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">Analytics - Coming Soon</h1>
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/practice-sets"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">Practice Sets - Coming Soon</h1>
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">Settings - Coming Soon</h1>
              </div>
            </ProtectedRoute>
          }
        />

        {/* Teacher Routes - Placeholder */}
        <Route
          path="/teacher/dashboard"
          element={
            <ProtectedRoute allowedRoles={['teacher']}>
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">Teacher Dashboard - Coming Soon</h1>
              </div>
            </ProtectedRoute>
          }
        />

        {/* School Routes - Placeholder */}
        <Route
          path="/school/dashboard"
          element={
            <ProtectedRoute allowedRoles={['school']}>
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">School Dashboard - Coming Soon</h1>
              </div>
            </ProtectedRoute>
          }
        />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
