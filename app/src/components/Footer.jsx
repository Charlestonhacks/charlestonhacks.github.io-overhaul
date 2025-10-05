import { Group, ActionIcon, Text, Container } from '@mantine/core';
import { IconBrandInstagram, IconBrandYoutube, IconBrandX, IconBrandLinkedin } from '@tabler/icons-react';

export function Footer() {
  const socials = [
    { icon: IconBrandInstagram, href: 'https://instagram.com/charlestonhacks', label: 'Instagram' },
    { icon: IconBrandYoutube, href: 'https://youtube.com/@charlestonhacks', label: 'YouTube' },
    { icon: IconBrandX, href: 'https://x.com/charlestonhacks', label: 'X' },
    { icon: IconBrandLinkedin, href: 'https://linkedin.com/company/charlestonhacks', label: 'LinkedIn' },
  ];

  return (
    <Container size="xl" py="md">
      <Group justify="space-between" align="center">
        <Text size="sm" c="dimmed">
          © {new Date().getFullYear()} CharlestonHacks. All rights reserved.
        </Text>

        <Group gap="xs">
          {socials.map((social) => (
            <ActionIcon
              key={social.label}
              component="a"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="subtle"
              color="gold"
              size="lg"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </ActionIcon>
          ))}
        </Group>
      </Group>
    </Container>
  );
}
