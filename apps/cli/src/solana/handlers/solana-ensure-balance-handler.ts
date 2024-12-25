import type { SolanaConfig } from '@samui/solana';
import { getBalanceFormatted, getSolanaContext, requestAirdrop } from '@samui/solana';

export async function solanaEnsureBalanceHandler(amount: string, receiver: string, options: SolanaConfig) {
    const { client, explorerUrl, signer } = await getSolanaContext(options);

    const address = receiver ?? signer.address;
    const balance = (await getBalanceFormatted({ address, client })) || '0';

    if (parseFloat(balance) >= parseFloat(amount)) {
        console.log(`Balance of ${address} is ${balance} SOL\n${explorerUrl(address)}`);
        return;
    }

    const airdropAmount = parseFloat(amount) - parseFloat(balance);
    const tx = await requestAirdrop({ address: address, amount: airdropAmount, client });
    const newBalance = await getBalanceFormatted({ address, client });
    console.log(`Airdropped ${airdropAmount} SOL to ${address}, balance is ${newBalance} SOL\n${explorerUrl(tx)}`);
}
