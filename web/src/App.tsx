import { Box, Paper } from '@mantine/core';
import ColorToggle from './components/colortoggle/colortoggle';
import Dashboard from './components/dashboard/dashboard';
import classes from './index.module.css';

export default function App() {
  return (
    <Box className={classes.container}>
      <Paper className={classes.main} shadow='sm'>
        <Dashboard />
        <ColorToggle />
      </Paper>
    </Box>
  );
};
