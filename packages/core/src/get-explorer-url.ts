import { getExplorerPath } from './get-explorer-path';

export const explorerClusters = ['custom', 'devnet', 'local', 'mainnet', 'testnet'] as const;

export type ExplorerUrlCluster = (typeof explorerClusters)[number];

export function getExplorerUrl(path: string, cluster: ExplorerUrlCluster) {
    path = getExplorerPath(path);

    const suffix = cluster === 'mainnet' ? '' : `?cluster=${cluster.replace('local', 'custom')}`;

    // TODO: Add support 'solana' | 'solana-fm' | 'solscan' | 'custom'
    // Should be configurable through env vars and cli option
    const explorerUrl = 'https://explorer.solana.com';

    return `${explorerUrl}${path.startsWith('/') ? path : `/${path}`}${suffix}`;
}
