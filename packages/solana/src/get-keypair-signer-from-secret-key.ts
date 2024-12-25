import { createKeyPairSignerFromBytes } from '@solana/web3.js';

import { getKeypairBytes } from './get-keypair-bytes';

export async function getKeypairSignerFromSecretKey(secretKey: string) {
    const keypairBytes = getKeypairBytes(secretKey);

    return await createKeyPairSignerFromBytes(keypairBytes);
}
