import type { SolanaClient } from './get-solana-client';

export function getVersion({ client }: { client: SolanaClient }) {
    return client.rpc.getVersion().send();
}
