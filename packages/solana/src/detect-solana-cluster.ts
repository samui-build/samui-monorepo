import { getGenesisHash } from './get-genesis-hash';
import type { SolanaClient } from './get-solana-client';
import { SolanaConfig } from './parse-solana-config';

export type DetectedSolanaCluster = 'custom' | 'devnet' | 'local' | 'mainnet' | 'testnet';

const clusters: Record<string, DetectedSolanaCluster> = {
    '4uhcVJyU9pJkvQyS88uRDiswHXSCkY3zQawwpjk2NsNY': 'testnet',
    '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc147dw2N9d': 'mainnet',
    EtWTRABZaYq6iMfeYKouRu166VU2xqa1wcaWoxPkrZBG: 'devnet',
};

export async function detectSolanaCluster({
    client,
    config,
}: {
    client: SolanaClient;
    config: SolanaConfig;
}): Promise<{ cluster: DetectedSolanaCluster; genesisHash: string }> {
    const genesisHash = await getGenesisHash({ client });

    if (clusters[genesisHash]) {
        return { cluster: clusters[genesisHash], genesisHash };
    }

    return { cluster: config.rpcUrl.toString().includes('localhost') ? 'local' : 'custom', genesisHash };
}
