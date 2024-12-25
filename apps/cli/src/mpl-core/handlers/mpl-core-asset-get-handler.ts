import { assetGetHandler, getUmi } from '@samui/mpl-core';
import type { SolanaConfig } from '@samui/solana';
import { getSolanaContext } from '@samui/solana';

export async function mplCoreAssetGetHandler(assetAddress: string, options: SolanaConfig) {
    const { config, explorerUrl } = await getSolanaContext(options);
    const umi = getUmi({ config });

    try {
        const { asset, collection } = await assetGetHandler(umi, assetAddress);
        if (collection) {
            console.log(' => Collection:', collection);
            console.log(` => View Collection: ${explorerUrl(collection.publicKey)}`);
        }

        console.log(` => Asset:`, asset);
        console.log(` => View Asset: ${explorerUrl(asset.publicKey)}`);
    } catch (error) {
        console.error(`Error fetching asset: ${error}`);
    }
}
