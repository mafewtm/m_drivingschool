
import { Tooltip, UnstyledButton, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import classes from './colortoggle.module.css';

export default function Navbar() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const Icon = computedColorScheme === 'light' ? IconMoon : IconSun

  return (
    <nav className={classes.navbar}>
      <Tooltip label={'Change theme'} position='right' transitionProps={{ duration: 0 }}>
        <UnstyledButton onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')} className={classes.link}>
          <Icon className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Tooltip>
    </nav>
  );
}