import { getKeypairSignerFromSecretKey } from './get-keypair-signer-from-secret-key';
import { getKeypairSignerGenerated } from './get-keypair-signer-generated';

export async function getKeypairSigner(secretKey: string) {
    if (secretKey === 'generated') {
        return await getKeypairSignerGenerated();
    }
    return await getKeypairSignerFromSecretKey(secretKey);
}
