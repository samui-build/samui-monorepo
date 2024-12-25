import * as v from 'valibot';

const schema = v.object({
    keypairPath: v.pipe(v.string(), v.minLength(1, 'The path is too short')),
    rpcUrl: v.pipe(v.string(), v.url('The URL must be a valid')),
    rpcUrlSubscriptions: v.pipe(v.string(), v.url('The URL must be a valid'))
});

export type Env = v.InferOutput<typeof schema>;

export function getEnvironment(params: Record<string, string>): Env {
    return v.parse(schema, params);
}
