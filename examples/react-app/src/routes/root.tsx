import { foo as coreFoo } from '@samui/core';
import { SolanaGetVersion, useFoo } from '@samui/react';

export function Root() {
    const foo = useFoo();
    const coreFooResult = coreFoo();

    return (
        <div>
            <pre>{JSON.stringify({ coreFooResult, foo }, null, 4)}</pre>
            <SolanaGetVersion />
        </div>
    );
}
