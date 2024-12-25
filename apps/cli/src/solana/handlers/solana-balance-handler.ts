import type { SolanaConfig } from '@samui/solana';
import { getBalanceFormatted, getSolanaContext } from '@samui/solana';

export async function solanaBalanceHandler(address: string, options: SolanaConfig) {
    const { client, cluster, signer } = await getSolanaContext(options);

    address = address ?? signer.address;
    const balance = await getBalanceFormatted({ address, client });

    console.log(`Balance for ${address} is ${balance} SOL on cluster ${cluster}`);
}
