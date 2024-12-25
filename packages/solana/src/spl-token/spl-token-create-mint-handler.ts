import { getKeypairSigner } from '../get-keypair-signer';
import { getSolanaContext } from '../get-solana-context';
import { handleSolanaError } from '../handle-solana-error';
import { SolanaConfig } from '../parse-solana-config';
import { createMint } from './create-mint';

export async function splTokenCreateMintHandler(options: SolanaConfig & { decimals: number; secretKey: string }) {
    const { client, signer, explorerUrl } = await getSolanaContext(options);

    if (!options.secretKey) {
        throw new Error('Secret key is required');
    }

    const mint = await getKeypairSigner(options.secretKey);
    const decimals = options.decimals;

    try {
        const tx = await createMint({
            authority: signer,
            client,
            decimals,
            mint,
            payer: signer,
        });

        console.log(`Created mint ${mint.address} with ${decimals} decimals \n${explorerUrl(tx)}`);
    } catch (error) {
        handleSolanaError(error);
    }
}
