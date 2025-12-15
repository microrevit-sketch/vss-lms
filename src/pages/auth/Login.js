import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Mail, Lock, LogIn, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('admin123');
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(email, password, role);
    
    if (result.success) {
      // Navigate based on role
      switch (role) {
        case 'student':
          navigate('/student/dashboard');
          break;
        case 'teacher':
          navigate('/teacher/dashboard');
          break;
        case 'school':
          navigate('/school/dashboard');
          break;
        default:
          navigate('/');
      }
    } else {
      setError(result.error || 'Login failed. Please try again.');
    }
    
    setLoading(false);
  };

  return (
    <>
      <main>
        <div className="login-wrap">
          {/* Left Side - Illustration */}
          <div className="login-left">
            <img alt="Sketch" src="/login-sketch.png" onError={(e) => {
              e.target.style.display = 'none';
            }} />
            <h1>Welcome Back to Virtual SundarSTEM</h1>
            <p>Sign in to access your SundarSTEM account!</p>
          </div>

          {/* Right Side - Login Form */}
          <div className="login-right">
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="form-group mb-3">
                <label>
                  <div>
                    <Mail size={17} />
                    Email Address
                  </div>
                </label>
                <input
                  className="form-input"
                  type="email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="form-group relative mb-3">
                <label>
                  <div>
                    <Lock size={17} />
                    Password
                  </div>
                </label>
                <input
                  className="form-input"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-eye"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye size={17} /> : <EyeOff size={17} />}
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded p-3 mb-3">
                  <p className="text-red-600 text-sm font-semibold">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-submit flex items-center justify-center gap-1"
                disabled={loading}
              >
                {loading ? (
                  <span>Signing In...</span>
                ) : (
                  <>
                    Sign In
                    <LogIn size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
