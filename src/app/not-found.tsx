import Link from 'next/link';
import { Container, Title, Text, Button, Stack } from '@mantine/core';

export default function NotFound() {
  return (
    <Container size="sm" py={80}>
      <Stack align="center" gap="lg">
        <Title order={1} size="h1">
          404
        </Title>
        <Title order={2} size="h2">
          Page Not Found
        </Title>
        <Text c="dimmed" ta="center">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </Text>
        <Button component={Link} href="/" size="lg">
          Go back home
        </Button>
      </Stack>
    </Container>
  );
}
