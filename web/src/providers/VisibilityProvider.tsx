import React, { Context, createContext, useContext, useEffect, useState } from 'react';
import { useNuiEvent } from '../hooks/useNuiEvent';
import { fetchNui } from '../utils/fetchNui';
import { isEnvBrowser } from '../utils/misc';
import { Transition } from '@mantine/core';

const VisibilityCtx = createContext<VisibilityProviderValue | null>(null);

interface VisibilityProviderValue {
	setVisible: (visible: boolean) => void;
	visible: boolean;
}
export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [visible, setVisible] = useState(false);

	useNuiEvent<boolean>('setVisible', setVisible);

	useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        if (!isEnvBrowser()) {
          fetchNui('hideFrame');
        } else {
          setVisible(!visible);
        }
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible]);

	return (
		<VisibilityCtx.Provider value={{ visible, setVisible }}>
			<Transition mounted={visible} transition='pop' duration={200} timingFunction='ease'>
				{(styles) => <div style={{ height: '100%', ...styles }}>{children}</div>}
			</Transition>
		</VisibilityCtx.Provider>
	);
};

export const useVisibility = () => useContext<VisibilityProviderValue>(VisibilityCtx as Context<VisibilityProviderValue>);