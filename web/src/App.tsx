import { useState } from 'react';
import { useNuiEvent } from './hooks/useNuiEvent';
import { default as locales, setLocale } from './locales';
import { Paper, Text } from '@mantine/core';
import classes from './index.module.css';

export default function App() {
  const [visible, setVisible] = useState(false);


  return (
    <>
      {visible && (
        <Paper className={classes.main} shadow='sm' p='sm'>
          <Text>Hello</Text>
        </Paper>
      )}
    </>
  );
};
