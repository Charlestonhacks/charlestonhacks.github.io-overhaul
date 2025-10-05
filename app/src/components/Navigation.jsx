import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Group, Button, Tabs, Text, Image } from '@mantine/core';
import { useAuthStore } from '../store/authStore';
import { AuthModal } from './AuthModal';

export function Navigation() {
  const { user, signOut } = useAuthStore();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active tab based on pathname
  const getActiveTab = () => {
    if (location.pathname === '/') return 'home';
    if (location.pathname.startsWith('/about')) return 'about';
    if (location.pathname === '/directory') return 'directory';
    if (location.pathname.startsWith('/profile')) return 'profile';
    if (location.pathname === '/innovation-engine') return 'innovation-engine';
    if (location.pathname === '/neural') return 'neural';
    return null;
  };

  return {
    primaryNav: (
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

          <Tabs value={getActiveTab()} onChange={(value) => {
            if (value === 'home') navigate('/');
            else if (value === 'about') navigate('/about/mission');
            else if (value) navigate(`/${value}`);
          }} ml="xl">
            <Tabs.List>
              <Tabs.Tab value="home">Home</Tabs.Tab>
              <Tabs.Tab value="about">About</Tabs.Tab>
              <Tabs.Tab value="directory">Directory</Tabs.Tab>
              <Tabs.Tab value="profile">Profile</Tabs.Tab>
              <Tabs.Tab value="innovation-engine">Innovation Engine</Tabs.Tab>
              <Tabs.Tab value="neural">Neural</Tabs.Tab>
            </Tabs.List>
          </Tabs>
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
    ),
    secondaryNav: location.pathname.startsWith('/about') ? (
      <Group h="100%" px="md" bg="dark.7">
        <Tabs value={location.pathname} onChange={(value) => navigate(value)}>
          <Tabs.List>
            <Tabs.Tab value="/about/mission">Mission</Tabs.Tab>
            <Tabs.Tab value="/about/board">Board Members</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Group>
    ) : null,
  };
}
