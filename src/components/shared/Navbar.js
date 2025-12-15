import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LogOut, Award, BookOpen } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Program navigation links (always visible)
  const programLinks = [
    { name: 'VSS', path: '/vss', color: '#C90016', title: 'Virtual STEM School' },
    { name: 'RMC', path: '/rmc', color: '#000080', title: 'Regional Math Clubs' },
    { name: 'PMC', path: '/pmc-5', color: '#01411C', title: 'Pakistan Math Contest' },
  ];

  const getNavLinks = () => {
    if (!user) return [];

    if (user.role === 'student') {
      return [
        { name: 'Dashboard', path: '/student/dashboard', icon: <BookOpen size={20} /> },
        { name: 'Practice', path: '/student/practice', icon: <Award size={20} /> },
        { name: 'Contests', path: '/student/contests', icon: <Award size={20} /> },
        { name: 'Leaderboards', path: '/student/leaderboards', icon: <Award size={20} /> },
      ];
    }

    return [];
  };

  const navLinks = getNavLinks();

  return (
    <nav className="main-header sticky top-0 z-50">
      <div className="containerLayout">
        <div className="header-wrap">
          {/* Logo */}
          <Link to="/" className="header-main-logo">
            <span>SundarSTEM School</span>
          </Link>

          {/* Program Links - Always visible */}
          <div className="header-center flex items-center space-x-1">
            {programLinks.map((program) => (
              <Link
                key={program.path}
                to={program.path}
                className="program-nav-link px-3 py-2 text-white hover:bg-white hover:bg-opacity-20 rounded transition-all font-semibold text-base"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}
                title={program.title}
              >
                {program.name}
              </Link>
            ))}
          </div>

          {/* User Menu / Sign In */}
          <div className="header-right dropdown-main">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center space-x-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="flex items-center space-x-2 px-3 py-2 text-white hover:bg-white hover:bg-opacity-20 rounded transition-all font-medium"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-3 py-2 text-white hover:bg-white hover:bg-opacity-20 rounded transition-all"
                  title="Logout"
                >
                  <LogOut size={18} />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </div>
            ) : (
              <Link to="/login" data-discover="true">ILM Sign In</Link>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
