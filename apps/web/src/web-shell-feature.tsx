import './web-shell-feature.css';

import { Text } from '@mantine/core';
import { UiFooterLink } from '@samui/ui';
import { IconDashboard, IconTools } from '@tabler/icons-react';
import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, RouteObject, Routes } from 'react-router-dom';

import { WebLayout } from './web-layout.tsx';
import { WebProvider } from './web-provider.tsx';
import { WebUiProvider } from './web-ui-provider.tsx';

const footerLinks: UiFooterLink[] = [
    { icon: IconDashboard, label: 'Dashboard', to: '/dashboard' },
    { icon: IconTools, label: 'Tools', to: '/tools' },
];
const routes: RouteObject[] = [
    { element: <Navigate replace to="/dashboard" />, index: true },
    { element: <Text>DASHBOARD</Text>, path: 'dashboard/*' },
    { element: <Text>TOOLS</Text>, path: 'tools/*' },
];

export function WebShellFeature() {
    return (
        <WebProvider name="@samui/web" version="1.0.0">
            <BrowserRouter>
                <WebUiProvider>
                    <WebLayout footerLinks={footerLinks}>
                        <Suspense fallback={<p>Loading...</p>}>
                            <WebShellRouter routes={routes} />
                        </Suspense>
                    </WebLayout>
                </WebUiProvider>
            </BrowserRouter>
        </WebProvider>
    );
}

export function WebShellRouter({ routes }: { routes: RouteObject[] }) {
    return (
        <Routes>
            {routes.map(route => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
}
