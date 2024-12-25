import { burnV1, collectionAddress, fetchAssetV1 } from '@metaplex-foundation/mpl-core';
import { publicKey } from '@metaplex-foundation/umi';
import { base58 } from '@metaplex-foundation/umi/serializers';
import { getUmi } from '@samui/mpl-core';
import type { SolanaConfig } from '@samui/solana';
import { getSolanaContext } from '@samui/solana';

export async function mplCoreAssetBurnHandler(assetAddress: string, options: SolanaConfig) {
    const { config, explorerUrl } = await getSolanaContext(options);
    const umi = getUmi({ config });

    const asset = await fetchAssetV1(umi, publicKey(assetAddress));
    console.log(` => Asset:`, asset);
    console.log(` => View Asset: ${explorerUrl(asset.publicKey)}`);

    try {
        const result = await burnV1(umi, {
            asset: asset.publicKey,
            collection: collectionAddress(asset),
        }).sendAndConfirm(umi);
        const [signature] = base58.deserialize(result.signature);
        console.log(` => View Transaction: ${explorerUrl(signature)}`);
    } catch (error) {
        console.error(`Error fetching asset: ${error}`);
    }
}
