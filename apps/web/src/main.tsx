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

function ErrorBoundaryFallback({ error, ...props }: { error: Error }) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.

    console.error({ error, props });
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: 'red' }}>{`${error}`}</pre>
        </div>
    );
}
