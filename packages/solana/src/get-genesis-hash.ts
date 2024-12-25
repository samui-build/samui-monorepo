import type { SolanaClient } from './get-solana-client';

export function getGenesisHash({ client }: { client: SolanaClient }) {
    return client.rpc.getGenesisHash().send();
}
