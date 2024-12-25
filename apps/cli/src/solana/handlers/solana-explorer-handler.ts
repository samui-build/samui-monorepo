import type { SolanaConfig } from '@samui/solana';
import { getSolanaContext } from '@samui/solana';

export async function solanaExplorerHandler(path: string, options: SolanaConfig) {
    const { explorerUrl, signer } = await getSolanaContext(options);

    console.log(`${explorerUrl(path ?? signer.address)}`);
}
