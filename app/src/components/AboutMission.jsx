import { Container, Title, Text, SimpleGrid, Card, List, ThemeIcon } from '@mantine/core';
import { IconRocket, IconUsers, IconBook, IconBulb, IconCheck } from '@tabler/icons-react';

export function AboutMission() {
  const missions = [
    {
      icon: IconRocket,
      title: 'Host Hackathons',
      description: 'We organize and run hackathons that bring together developers, designers, and entrepreneurs to build innovative solutions to real-world problems.'
    },
    {
      icon: IconUsers,
      title: 'Build Community',
      description: 'We create opportunities for tech enthusiasts to connect, collaborate, and learn from each other through meetups, workshops, and events.'
    },
    {
      icon: IconBook,
      title: 'Educate & Inspire',
      description: 'We provide resources, mentorship, and learning opportunities to help individuals grow their technical skills and advance their careers.'
    },
    {
      icon: IconBulb,
      title: 'Drive Innovation',
      description: 'We support the development of new ideas and technologies that can make a positive impact on our community and beyond.'
    },
  ];

  const values = [
    { label: 'Inclusivity', description: 'We welcome everyone, regardless of skill level or background.' },
    { label: 'Collaboration', description: 'We believe the best ideas come from working together.' },
    { label: 'Innovation', description: 'We encourage creative thinking and experimentation.' },
    { label: 'Community', description: 'We prioritize building lasting relationships and support networks.' },
    { label: 'Excellence', description: 'We strive for quality in everything we do.' },
  ];

  return (
    <Container size="lg" py="xl">
      <Title order={1} ta="center" mb="xl" className="text-gold-300">
        Our Mission
      </Title>

      <Text size="xl" c="dimmed" ta="center" mb="xl" maw={800} mx="auto">
        CharlestonHacks is dedicated to fostering innovation, collaboration, and technical excellence
        in the Charleston tech community.
      </Text>

      <Title order={2} mb="md" c="gold">What We Do</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg" mb="xl">
        {missions.map((mission) => (
          <Card key={mission.title} shadow="sm" padding="lg" radius="md" withBorder>
            <ThemeIcon size="xl" radius="md" color="gold" mb="md">
              <mission.icon size={28} />
            </ThemeIcon>
            <Title order={3} size="h4" mb="xs">{mission.title}</Title>
            <Text size="sm" c="dimmed">{mission.description}</Text>
          </Card>
        ))}
      </SimpleGrid>

      <Card shadow="sm" padding="xl" radius="md" withBorder>
        <Title order={2} mb="md" c="gold">Our Values</Title>
        <List
          spacing="md"
          size="sm"
          icon={
            <ThemeIcon color="gold" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          {values.map((value) => (
            <List.Item key={value.label}>
              <Text fw={600} span c="gold">{value.label}:</Text> {value.description}
            </List.Item>
          ))}
        </List>
      </Card>
    </Container>
  );
}
