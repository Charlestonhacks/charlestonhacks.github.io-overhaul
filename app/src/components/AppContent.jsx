import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppShell, Loader, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useAuthStore } from '../store/authStore';
import { trackPageView } from '../lib/analytics';
import { Navigation } from './Navigation';
import { MobileNav } from './MobileNav';
import { Footer } from './Footer';
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
  const [mobileNavOpened, { toggle: toggleMobileNav, close: closeMobileNav }] = useDisclosure();

  useEffect(() => {
    initialize();
  }, [initialize]);

  // Track page views on route changes
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  // Close mobile nav on route change
  useEffect(() => {
    closeMobileNav();
  }, [location.pathname, closeMobileNav]);

  if (loading) {
    return (
      <Center h="100vh">
        <Loader color="gold" size="lg" />
      </Center>
    );
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileNavOpened },
      }}
      footer={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Navigation mobileNavOpened={mobileNavOpened} toggleMobileNav={toggleMobileNav} />
      </AppShell.Header>

      <AppShell.Navbar>
        <MobileNav />
      </AppShell.Navbar>

      <AppShell.Main>
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
      </AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
