import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createContext, ReactNode, useContext } from 'react';

const client = new QueryClient();

export interface CoreProviderContext {
    hash: string;
    href: string;
    name: string;
    origin: string;
    pathname: string;
    version: string;
}

const Context = createContext<CoreProviderContext>({} as CoreProviderContext);

export function WebProvider({ children, name, version }: { children: ReactNode; name: string; version: string }) {
    const { hash, href, origin, pathname } = window.location;

    const value: CoreProviderContext = {
        hash,
        href,
        name,
        origin,
        pathname,
        version,
    };

    return (
        <QueryClientProvider client={client}>
            <Context.Provider value={value}>{children}</Context.Provider>
        </QueryClientProvider>
    );
}

export function useCore() {
    return useContext(Context);
}
