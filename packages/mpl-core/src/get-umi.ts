import { createSignerFromKeypair, signerIdentity } from '@metaplex-foundation/umi';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';

export function getUmi({ config }: { config: { rpcUrl: string; signerSecretKey: string } }) {
    const umi = createUmi(config.rpcUrl, { commitment: 'confirmed' });
    const keypairBuffer = getKeypairBytes(config.signerSecretKey);
    const signer = createSignerFromKeypair(umi, umi.eddsa.createKeypairFromSecretKey(keypairBuffer));
    umi.use(signerIdentity(signer));
    return umi;
}

export type Umi = ReturnType<typeof getUmi>;

function getKeypairBytes(secretKey: string) {
    return Uint8Array.from(JSON.parse(secretKey));
}
