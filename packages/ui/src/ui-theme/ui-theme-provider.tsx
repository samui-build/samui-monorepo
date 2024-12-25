import { Loader, MantineProvider, MantineThemeOverride } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import React, { Fragment, ReactNode, Suspense } from 'react';

export interface UiThemeProviderOptions {
    children: ReactNode;
    colorScheme: 'dark' | 'light';
    theme: MantineThemeOverride;
}

export function UiThemeProvider({ children, colorScheme, theme }: UiThemeProviderOptions) {
    return (
        <Fragment>
            <MantineProvider theme={theme} forceColorScheme={colorScheme}>
                <ModalsProvider>
                    <Notifications />
                    <Suspense fallback={<Loader />}>{children}</Suspense>
                </ModalsProvider>
            </MantineProvider>
        </Fragment>
    );
}
