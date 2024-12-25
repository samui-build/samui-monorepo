import type { SolanaConfig } from '@samui/solana';
import { getSolanaContext, requestAirdrop } from '@samui/solana';

export async function solanaAirdropHandler(amount: string, receiver: string, options: SolanaConfig) {
    const { client, signer } = await getSolanaContext(options);

    const address = receiver ?? signer.address;
    await requestAirdrop({ address, amount: parseFloat(amount), client });

    console.log(`Requested airdrop for ${address} (${amount} SOL)`);
}
