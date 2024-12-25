import { SolanaGetVersion, useFoo } from '@samui/react';

export function Root() {
    const foo = useFoo();

    return (
        <div>
            <pre>{JSON.stringify({ foo }, null, 4)}</pre>
            <SolanaGetVersion />
        </div>
    );
}
