export function getKeypairBytes(secretKey: string) {
    return Uint8Array.from(JSON.parse(secretKey));
}
