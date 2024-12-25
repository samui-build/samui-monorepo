import { address, assertIsAddress } from '@solana/web3.js';

import { getSolanaContext } from '../get-solana-context';
import { handleSolanaError } from '../handle-solana-error';
import { SolanaConfig } from '../parse-solana-config';
import { closeMint } from './close-mint';

export async function splTokenCloseMintHandler(mint: string, options: SolanaConfig) {
    assertIsAddress(mint);
    const { client, signer, explorerUrl } = await getSolanaContext(options);

    try {
        const tx = await closeMint({ account: address(mint), client, payer: signer });

        console.log(`Closed mint ${mint}\n${explorerUrl(tx)}`);
    } catch (error) {
        handleSolanaError(error);
    }
}
