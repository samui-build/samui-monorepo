import { appendTransactionMessageInstructions, type IInstruction, pipe, type TransactionSigner } from '@solana/web3.js';

import { createDefaultTransaction } from './create-default-transaction';
import type { SolanaClient } from './get-solana-client';
import { signAndSendTransaction } from './sign-and-send-transaction';

export async function sendAndConfirmInstructions(
    client: SolanaClient,
    payer: TransactionSigner,
    instructions: IInstruction[],
) {
    return await pipe(
        await createDefaultTransaction(client, payer),
        tx => appendTransactionMessageInstructions(instructions, tx),
        tx => signAndSendTransaction(client, tx),
    );
}
