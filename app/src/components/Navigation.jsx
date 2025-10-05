import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Group, Button, Menu, Text, Image, Container, Flex } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useAuthStore } from '../store/authStore';
import { AuthModal } from './AuthModal';

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
    <nav className="border-b border-gray-700 bg-gray-900">
      <Container size="xl" py="md">
        <Flex justify="space-between" align="center" wrap="wrap" gap="md">
          <Link to="/" className="no-underline">
            <Image
              src="/images/charlestonhackslogo.svg"
              alt="CharlestonHacks"
              h={40}
              w="auto"
            />
          </Link>

          <Group gap="sm" className="flex-grow justify-center">
            <Button
              component={Link}
              to="/"
              variant={location.pathname === '/' ? 'light' : 'subtle'}
              color="gold"
            >
              Home
            </Button>

            <Menu trigger="hover" openDelay={100} closeDelay={200}>
              <Menu.Target>
                <Button
                  variant={isAboutActive ? 'light' : 'subtle'}
                  color="gold"
                  rightSection={<IconChevronDown size={16} />}
                >
                  About
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                {aboutItems.map((item) => (
                  <Menu.Item
                    key={item.path}
                    component={Link}
                    to={item.path}
                  >
                    {item.label}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>

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
        </Flex>
      </Container>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </nav>
  );
}
