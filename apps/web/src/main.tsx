import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';

import { WebShellFeature } from './web-shell-feature';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
            <WebShellFeature />
        </ErrorBoundary>
    </StrictMode>,
);

function ErrorBoundaryFallback({ error }: { error: Error }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: 'red' }}>{`${error}`}</pre>
        </div>
    );
}
