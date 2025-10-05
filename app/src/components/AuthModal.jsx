import { useState } from 'react';
import { Modal, Stack, Button, Text } from '@mantine/core';
import { IconBrandGoogle, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { useAuthStore } from '../store/authStore';

export function AuthModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const { signInWithOAuth } = useAuthStore();

  const handleOAuth = async (provider) => {
    setLoading(true);
    try {
      await signInWithOAuth(provider);
      // OAuth will redirect, so no need to close modal
    } catch (error) {
      console.error('OAuth error:', error);
      setLoading(false);
    }
  };

  return (
    <Modal opened={isOpen} onClose={onClose} title="Sign In" centered size="sm">
      <Stack gap="md">
        <Text size="sm" c="dimmed" ta="center">
          Choose your preferred sign-in method
        </Text>

        <Button
          fullWidth
          leftSection={<IconBrandGoogle size={20} />}
          variant="default"
          onClick={() => handleOAuth('google')}
          disabled={loading}
        >
          Continue with Google
        </Button>

        <Button
          fullWidth
          leftSection={<IconBrandGithub size={20} />}
          variant="default"
          onClick={() => handleOAuth('github')}
          disabled={loading}
        >
          Continue with GitHub
        </Button>

        <Button
          fullWidth
          leftSection={<IconBrandLinkedin size={20} />}
          variant="default"
          onClick={() => handleOAuth('linkedin_oidc')}
          disabled={loading}
        >
          Continue with LinkedIn
        </Button>
      </Stack>
    </Modal>
  );
}
