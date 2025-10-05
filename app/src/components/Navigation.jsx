import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { AuthModal } from './AuthModal';

function NavDropdown({ label, items, isActive }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={`nav-dropdown-trigger ${isActive ? 'active' : ''}`}>
        {label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
          style={{ marginLeft: '4px', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
        >
          <path d="M6 8L2 4h8z" />
        </svg>
      </button>
      {isOpen && (
        <div className="nav-dropdown-menu">
          {items.map((item) => (
            <Link key={item.path} to={item.path} className="nav-dropdown-item">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navigation() {
  const { user, signOut } = useAuthStore();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const location = useLocation();

  const aboutItems = [
    { path: '/about/mission', label: 'Mission' },
    { path: '/about/board', label: 'Board Members' },
  ];

  const isAboutActive = location.pathname.startsWith('/about');

  return (
    <nav className="main-nav">
      <div className="nav-brand">
        <Link to="/">
          <img src="/images/charlestonhackslogo.svg" alt="CharlestonHacks" className="nav-logo" />
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <NavDropdown label="About" items={aboutItems} isActive={isAboutActive} />
        <Link to="/directory" className={location.pathname === '/directory' ? 'active' : ''}>
          Directory
        </Link>
        <Link to="/profile" className={location.pathname.startsWith('/profile') ? 'active' : ''}>
          Profile
        </Link>
        <Link to="/innovation-engine" className={location.pathname === '/innovation-engine' ? 'active' : ''}>
          Innovation Engine
        </Link>
        <Link to="/neural" className={location.pathname === '/neural' ? 'active' : ''}>
          Neural
        </Link>
      </div>

      <div className="nav-auth">
        {user ? (
          <>
            <span className="user-email">{user.email}</span>
            <button onClick={signOut} className="btn-secondary">Sign Out</button>
          </>
        ) : (
          <button onClick={() => setShowAuthModal(true)} className="btn-primary">
            Sign In
          </button>
        )}
      </div>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </nav>
  );
}
