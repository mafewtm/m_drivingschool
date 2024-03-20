import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { debugData } from './utils/debugData';
import { isEnvBrowser } from './utils/misc';
import App from './App';
import '@mantine/core/styles.css';
import './global.css'

debugData([
  {
    action: 'setVisible',
    data: {
      visible: true,
    }
  },
]);

if (isEnvBrowser()) {
  const root = document.getElementById('root');

  // https://i.imgur.com/iPTAdYV.png - Night time img
  root!.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")';
  root!.style.backgroundSize = 'cover';
  root!.style.backgroundRepeat = 'no-repeat';
  root!.style.backgroundPosition = 'center';
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme='dark'>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
