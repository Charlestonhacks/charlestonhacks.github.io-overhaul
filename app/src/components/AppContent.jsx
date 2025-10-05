import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { trackPageView } from '../lib/analytics';
import { Navigation } from './Navigation';
import { HomePage } from './HomePage';
import { AuthCallback } from './AuthCallback';
import { ProfileForm } from './ProfileForm';
import { ProfileView } from './ProfileView';
import { DirectorySearch } from './DirectorySearch';
import { AboutMission } from './AboutMission';
import { BoardMembers } from './BoardMembers';

export function AppContent() {
  const { initialize, loading } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    initialize();
  }, [initialize]);

  // Track page views on route changes
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app-container">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/callback" element={<AuthCallback />} />

          {/* Profile routes */}
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/profile/edit" element={<ProfileForm />} />
          <Route path="/profile/:userId" element={<ProfileView />} />

          {/* Directory route */}
          <Route path="/directory" element={<DirectorySearch />} />

          {/* About routes */}
          <Route path="/about/mission" element={<AboutMission />} />
          <Route path="/about/board" element={<BoardMembers />} />

          {/* Legacy pages - redirect to root HTML files */}
          <Route
            path="/innovation-engine"
            element={<Navigate to="/2card.html" replace />}
          />
          <Route
            path="/neural"
            element={<Navigate to="/neural.html" replace />}
          />
        </Routes>
      </main>
    </div>
  );
}
