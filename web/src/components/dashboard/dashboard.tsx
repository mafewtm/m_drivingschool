import { Box, Group, Stack, Text, Button } from '@mantine/core';
import classes from './dashboard.module.css';

export default function Dashboard() {
  return (
    <Box className={classes.container}>
      <Group className={classes.main} justify='center'>
        <Stack align='center'>
          <Text className={classes.title} fw={600}>Driving School</Text>
          <Text className={classes.text} size='sm'>Take your driving theory test today and become a driving professional!</Text>
          <Button className={classes.button} variant='default' size='md' radius='xs'>Start Theory Test</Button>
        </Stack>
      </Group>
    </Box>
  );
}