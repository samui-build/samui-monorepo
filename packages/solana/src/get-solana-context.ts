import type { KeyPairSigner } from '@solana/web3.js';

import type { DetectedSolanaCluster } from './detect-solana-cluster';
import { detectSolanaCluster } from './detect-solana-cluster';
import { getExplorerUrl } from './get-explorer-url';
import { getKeypairSigner } from './get-keypair-signer';
import { getSolanaClient, type SolanaClient } from './get-solana-client';
import { parseSolanaConfig, type SolanaConfig } from './parse-solana-config';

export interface SolanaContext {
    client: SolanaClient;
    cluster: DetectedSolanaCluster;
    config: SolanaConfig;
    explorerUrl: (path: string) => string;
    genesisHash: string;
    signer: KeyPairSigner;
}

export async function getSolanaContext(options: SolanaConfig): Promise<SolanaContext> {
    const config = parseSolanaConfig(options);
    const client = getSolanaClient(config);
    const { cluster, genesisHash } = await detectSolanaCluster({ client, config });
    const signer = await getKeypairSigner(config.signerSecretKey);

    return {
        client,
        cluster,
        config,
        explorerUrl: (path: string) => getExplorerUrl(path, cluster),
        genesisHash,
        signer,
    };
}
