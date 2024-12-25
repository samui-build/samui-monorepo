import type { Address, Signature, TransactionSigner } from '@solana/web3.js';
import {
    type CloseAccountInput,
    getCloseAccountInstruction,
    TOKEN_2022_PROGRAM_ADDRESS,
} from '@solana-program/token-2022';

import { SolanaClient } from '../get-solana-client';
import { sendAndConfirmInstructions } from '../send-and-confirm-instructions';
import { getMint } from './get-mint';

export async function closeMint(options: {
    account: Address;
    client: SolanaClient;
    payer: TransactionSigner;
}): Promise<Signature> {
    const found = await getMint({ client: options.client, mint: options.account });

    if (!found) {
        throw new Error(`Account ${options.account} not found`);
    }

    if (Number(found.data.supply) > 0) {
        throw new Error(`Account ${options.account} has non-zero supply`);
    }

    const input: CloseAccountInput = {
        account: options.account,
        destination: options.payer.address,
        owner: options.payer,
    };

    const closeAccount = getCloseAccountInstruction(input, { programAddress: TOKEN_2022_PROGRAM_ADDRESS });

    return await sendAndConfirmInstructions(options.client, options.payer, [closeAccount]);
}
