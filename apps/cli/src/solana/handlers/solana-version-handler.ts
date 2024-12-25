import type { SolanaConfig } from '@samui/solana';
import { getSolanaContext, getVersion } from '@samui/solana';

export async function solanaVersionHandler(options: SolanaConfig) {
    const { client } = await getSolanaContext(options);

    const version = await getVersion({ client });

    console.log(`Version ${version['solana-core']}, Feature set ${version['feature-set']}`);
}
