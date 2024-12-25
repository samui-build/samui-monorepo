import type { SolanaConfig } from '@samui/solana';
import { getGenesisHash, getSolanaContext } from '@samui/solana';

export async function solanaGenesisHashHandler(options: SolanaConfig) {
    const { client, cluster } = await getSolanaContext(options);

    const genesisHash = await getGenesisHash({ client });
    console.log(`Genesis hash: ${genesisHash}, cluster: ${cluster}`);
}
