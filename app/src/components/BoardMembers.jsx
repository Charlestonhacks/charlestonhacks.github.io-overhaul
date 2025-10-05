import { Container, Title, Text, SimpleGrid, Card, Avatar, Badge, Button, Stack } from '@mantine/core';
import { IconMail } from '@tabler/icons-react';

export function BoardMembers() {
  const boardMembers = [
    {
      name: 'Board Member Name',
      role: 'President',
      bio: 'Brief bio about this board member and their contributions to CharlestonHacks.',
      image: '/images/placeholder-avatar.png',
    },
    // Add more board members here
  ];

  return (
    <Container size="lg" py="xl">
      <Stack align="center" mb="xl">
        <Title order={1} ta="center" className="text-gold-300">
          Board Members
        </Title>
        <Text size="lg" c="dimmed" ta="center">
          Meet the team leading CharlestonHacks
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" mb="xl">
        {boardMembers.map((member, index) => (
          <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <div className="bg-gray-800 flex items-center justify-center h-48">
                <Avatar
                  src={member.image}
                  alt={member.name}
                  size={120}
                  radius="xl"
                />
              </div>
            </Card.Section>

            <Stack gap="xs" mt="md">
              <Title order={3} size="h4">{member.name}</Title>
              <Badge color="gold" variant="light">{member.role}</Badge>
              <Text size="sm" c="dimmed">{member.bio}</Text>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>

      <Card shadow="sm" padding="xl" radius="md" withBorder>
        <Stack align="center" gap="md">
          <Title order={2} c="gold">Interested in Joining?</Title>
          <Text size="md" c="dimmed" ta="center" maw={600}>
            We're always looking for passionate individuals to help lead CharlestonHacks.
            If you're interested in joining our board, please reach out to us.
          </Text>
          <Button
            component="a"
            href="mailto:hello@charlestonhacks.com"
            color="gold"
            leftSection={<IconMail size={18} />}
          >
            Contact Us
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
