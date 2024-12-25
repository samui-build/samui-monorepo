import type { Address } from '@solana/web3.js';

import { getBalance } from './get-balance';
import type { SolanaClient } from './get-solana-client';
import { LAMPORTS_PER_SOL } from './request-airdrop';

export async function getBalanceFormatted(options: { address: Address | string; client: SolanaClient }) {
    const balance = await getBalance(options);
    const formatted = (Number(balance) / Number(LAMPORTS_PER_SOL)).toString();

    return formatted.includes('.') ? formatted.replace(/\.?0+$/, '') : formatted;
}
