// Core styles
import '@mantine/core/styles.css';
// Package styles
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';

import { MantineColor, MantineColorScheme } from '@mantine/core';
import { defaultColor, defaultColorScheme, storageKeyColor, storageKeyScheme, UiProvider } from '@samui/ui';
import { ReactNode } from 'react';

import { useWebAtomStorage } from './use-web-storage';

export function WebUiProvider({ children }: { children: ReactNode }) {
    const storageColor = useWebAtomStorage<MantineColor>({ defaultValue: defaultColor, key: storageKeyColor });
    const storageScheme = useWebAtomStorage<MantineColorScheme>({
        defaultValue: defaultColorScheme,
        key: storageKeyScheme,
    });

    return (
        <UiProvider storageColor={storageColor} storageScheme={storageScheme}>
            {children}
        </UiProvider>
    );
}
