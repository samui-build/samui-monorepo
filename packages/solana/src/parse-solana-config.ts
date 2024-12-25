import * as v from 'valibot';

const schema = v.object({
    rpcUrl: v.pipe(v.string(), v.url('The URL must be a valid')),
    rpcUrlSubscriptions: v.pipe(v.string(), v.url('The URL must be a valid')),
    signerSecretKey: v.pipe(v.string(), v.minLength(10, 'The secret is too short')),
});

export type SolanaConfig = v.InferOutput<typeof schema>;

export function parseSolanaConfig(params: Record<string, string>): SolanaConfig {
    return v.parse(schema, params);
}
