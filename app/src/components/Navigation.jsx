import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Group, Burger, Button, Text, Image } from '@mantine/core';
import { useAuthStore } from '../store/authStore';
import { AuthModal } from './AuthModal';

export function Navigation({ mobileNavOpened, toggleMobileNav }) {
  const { user, signOut } = useAuthStore();
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <Group h="100%" px="md" justify="space-between">
      <Group>
        <Burger
          opened={mobileNavOpened}
          onClick={toggleMobileNav}
          hiddenFrom="sm"
          size="sm"
          color="gold"
        />

        <Link to="/">
          <Image
            src="/images/charlestonhackslogo.svg"
            alt="CharlestonHacks"
            h={40}
            w="auto"
          />
        </Link>
      </Group>

      <Group gap="sm" visibleFrom="sm">
        {user ? (
          <>
            <Text size="sm" c="dimmed">{user.email}</Text>
            <Button onClick={signOut} variant="default" size="sm">
              Sign Out
            </Button>
          </>
        ) : (
          <Button onClick={() => setShowAuthModal(true)} color="gold" size="sm">
            Sign In
          </Button>
        )}
      </Group>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </Group>
  );
}
