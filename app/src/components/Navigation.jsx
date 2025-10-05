import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Group, Button, Text, Image } from '@mantine/core';
import { useAuthStore } from '../store/authStore';
import { AuthModal } from './AuthModal';

export function Navigation() {
  const { user, signOut } = useAuthStore();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const location = useLocation();

  return (
    <Group h="100%" px="md" justify="space-between">
      <Group>
        <Link to="/">
          <Image
            src="/images/charlestonhackslogo.svg"
            alt="CharlestonHacks"
            h={40}
            w="auto"
          />
        </Link>

        <Group gap="xs" ml="xl">
          <Button
            component={Link}
            to="/"
            variant={location.pathname === '/' ? 'light' : 'subtle'}
            color="gold"
          >
            Home
          </Button>

          <Button
            component={Link}
            to="/about/mission"
            variant={location.pathname.startsWith('/about') ? 'light' : 'subtle'}
            color="gold"
          >
            About
          </Button>

          <Button
            component={Link}
            to="/directory"
            variant={location.pathname === '/directory' ? 'light' : 'subtle'}
            color="gold"
          >
            Directory
          </Button>

          <Button
            component={Link}
            to="/profile"
            variant={location.pathname.startsWith('/profile') ? 'light' : 'subtle'}
            color="gold"
          >
            Profile
          </Button>

          <Button
            component={Link}
            to="/innovation-engine"
            variant={location.pathname === '/innovation-engine' ? 'light' : 'subtle'}
            color="gold"
          >
            Innovation Engine
          </Button>

          <Button
            component={Link}
            to="/neural"
            variant={location.pathname === '/neural' ? 'light' : 'subtle'}
            color="gold"
          >
            Neural
          </Button>
        </Group>
      </Group>

      <Group gap="sm">
        {user ? (
          <>
            <Text size="sm" c="dimmed">{user.email}</Text>
            <Button onClick={signOut} variant="default">
              Sign Out
            </Button>
          </>
        ) : (
          <Button onClick={() => setShowAuthModal(true)} color="gold">
            Sign In
          </Button>
        )}
      </Group>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </Group>
  );
}

export function SecondaryNav() {
  const location = useLocation();

  if (!location.pathname.startsWith('/about')) {
    return null;
  }

  return (
    <Group h="100%" px="md" bg="dark.7">
      <Button
        component={Link}
        to="/about/mission"
        variant={location.pathname === '/about/mission' ? 'light' : 'subtle'}
        color="gold"
        size="sm"
      >
        Mission
      </Button>

      <Button
        component={Link}
        to="/about/board"
        variant={location.pathname === '/about/board' ? 'light' : 'subtle'}
        color="gold"
        size="sm"
      >
        Board Members
      </Button>
    </Group>
  );
}
