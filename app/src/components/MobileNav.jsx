import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stack, NavLink, Divider, Button, Collapse } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useAuthStore } from '../store/authStore';
import { AuthModal } from './AuthModal';

export function MobileNav() {
  const location = useLocation();
  const { user, signOut } = useAuthStore();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [aboutOpened, setAboutOpened] = useState(location.pathname.startsWith('/about'));

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/directory', label: 'Directory' },
    { path: '/profile', label: 'Profile' },
    { path: '/innovation-engine', label: 'Innovation Engine' },
    { path: '/neural', label: 'Neural' },
  ];

  const aboutItems = [
    { path: '/about/mission', label: 'Mission' },
    { path: '/about/board', label: 'Board Members' },
  ];

  return (
    <Stack gap={0} p="md">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          component={Link}
          to={item.path}
          label={item.label}
          active={location.pathname === item.path}
          color="gold"
        />
      ))}

      <NavLink
        label="About"
        opened={aboutOpened}
        onClick={() => setAboutOpened(!aboutOpened)}
        active={location.pathname.startsWith('/about')}
        color="gold"
        rightSection={aboutOpened ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
      >
        {aboutItems.map((item) => (
          <NavLink
            key={item.path}
            component={Link}
            to={item.path}
            label={item.label}
            active={location.pathname === item.path}
            color="gold"
          />
        ))}
      </NavLink>

      <Divider my="md" />

      {user ? (
        <Button onClick={signOut} variant="default" fullWidth>
          Sign Out
        </Button>
      ) : (
        <Button onClick={() => setShowAuthModal(true)} color="gold" fullWidth>
          Sign In
        </Button>
      )}

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </Stack>
  );
}
