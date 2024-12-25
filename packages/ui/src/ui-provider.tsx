import { createTheme, DEFAULT_THEME, MantineColor, MantineColorScheme, MantineThemeOverride } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import React, { createContext, ReactNode, useContext, useMemo } from 'react';

import { CoreStorage } from './core-storage';
import { UiThemeProvider } from './ui-theme';

export interface UiProviderContext {
    actualColor: string;
    allColors: MantineColor[];
    color: MantineColor;
    colorScheme: MantineColorScheme;
    isDark: boolean;
    setColor: (input: MantineColor) => Promise<void>;
    setColorScheme: (input: MantineColorScheme) => Promise<void>;
    theme: MantineThemeOverride;
}

const Context = createContext<UiProviderContext>({} as UiProviderContext);

export const defaultColor: MantineColor = 'indigo';
export const defaultColorScheme: MantineColorScheme = 'dark';

const allColors: MantineColor[] = [
    'red',
    'pink',
    'grape',
    'violet',
    'indigo',
    'blue',
    'cyan',
    'teal',
    'green',
    'lime',
    'yellow',
    'orange',
];

export interface UiProviderProps {
    children: ReactNode;
    storageColor: CoreStorage<MantineColor>;
    storageScheme: CoreStorage<MantineColorScheme>;
}

export const storageKeyColor = 'sync:theme:color';
export const storageKeyScheme = 'sync:theme:scheme';

export function UiProvider({ children, storageColor, storageScheme }: UiProviderProps) {
    const queryColor = useQuery({ queryFn: () => storageColor.getValue(), queryKey: [storageKeyColor] });
    const queryScheme = useQuery({ queryFn: () => storageScheme.getValue(), queryKey: [storageKeyScheme] });

    const color = useMemo(() => queryColor.data ?? defaultColor, [queryColor.data]);
    const colorScheme = useMemo(() => queryScheme.data ?? defaultColorScheme, [queryScheme.data]);

    const theme = useMemo(
        () =>
            createTheme({
                colors: {
                    brand: DEFAULT_THEME.colors[color],
                },
                primaryColor: 'brand',
            }),
        [color],
    );

    const systemColorDark = useMemo(
        () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
        [],
    );
    const actualColorScheme = useMemo(
        () => (colorScheme === 'auto' ? (systemColorDark ? 'dark' : 'light') : colorScheme),
        [colorScheme, systemColorDark],
    );

    const value: UiProviderContext = {
        actualColor: DEFAULT_THEME.colors[color][6],
        allColors,
        color,
        colorScheme,
        isDark: actualColorScheme === 'dark',
        setColor: async (input: MantineColor) => {
            await storageColor.setValue(input);
            await queryColor.refetch();
        },
        setColorScheme: async (input: MantineColorScheme) => {
            await storageScheme.setValue(input);
            await queryScheme.refetch();
        },
        theme,
    };
    return (
        <Context.Provider value={value}>
            <UiThemeProvider colorScheme={actualColorScheme} theme={theme}>
                {children}
            </UiThemeProvider>
        </Context.Provider>
    );
}

export function useUi() {
    return useContext(Context);
}
