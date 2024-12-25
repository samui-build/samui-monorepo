import { fetchCollection } from '@metaplex-foundation/mpl-core';
import { generateSigner, publicKey } from '@metaplex-foundation/umi';
import { createAssetHandler, getUmi } from '@samui/mpl-core';
import { getSolanaContext, type SolanaConfig } from '@samui/solana';

export async function mplCoreAssetCreateHandler(
    collectionAddress: string,
    options: SolanaConfig & { name?: string; uri?: string },
) {
    const { config, explorerUrl } = await getSolanaContext(options);
    const umi = getUmi({ config });

    console.log(`Signer    : ${umi.identity.publicKey}`);
    console.log(`Collection: ${collectionAddress}`);

    const collection = await fetchCollection(umi, publicKey(collectionAddress));

    // Generate the Asset KeyPair
    const asset = generateSigner(umi);
    const assetName = options.name ?? 'My Asset';
    const assetUri = options.uri ?? 'https://example.com';

    const { signature } = await createAssetHandler({ asset, assetName, assetUri, collection, umi });

    console.log(`Transaction: ${explorerUrl(signature)}`);
    console.log(`Asset: ${explorerUrl(asset.publicKey)}`);
}
