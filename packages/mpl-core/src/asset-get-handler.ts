import { collectionAddress, fetchAssetV1, fetchCollectionV1 } from '@metaplex-foundation/mpl-core';
import { publicKey } from '@metaplex-foundation/umi';

import type { Umi } from './get-umi';

export async function assetGetHandler(umi: Umi, assetAddress: string) {
    const asset = await fetchAssetV1(umi, publicKey(assetAddress));
    // TODO: Make fetching collection optional
    const assetCollectionAddress = collectionAddress(asset);
    let collection;

    if (assetCollectionAddress) {
        collection = await fetchCollectionV1(umi, assetCollectionAddress);
    }

    return { asset, collection };
}
