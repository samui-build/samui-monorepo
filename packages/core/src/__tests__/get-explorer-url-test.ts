import { getExplorerPath } from '../get-explorer-path';
import { ExplorerUrlCluster, getExplorerUrl } from '../get-explorer-url';

// Mocking getExplorerPath
jest.mock('../get-explorer-path', () => ({
    getExplorerPath: jest.fn(),
}));

describe('getExplorerUrl', () => {
    const mockGetExplorerPath = getExplorerPath as jest.Mock;

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return the correct URL for mainnet cluster', () => {
        const path = '/tx/some-transaction-id';
        const cluster: ExplorerUrlCluster = 'mainnet';
        mockGetExplorerPath.mockReturnValue(path);

        const result = getExplorerUrl(path, cluster);

        expect(result).toBe(`https://explorer.solana.com${path}`);
        expect(mockGetExplorerPath).toHaveBeenCalledWith(path);
    });

    it('should return the correct URL for devnet cluster', () => {
        const path = 'block/some-block-id';
        const cluster: ExplorerUrlCluster = 'devnet';
        const processedPath = `/${path}`;
        mockGetExplorerPath.mockReturnValue(processedPath);

        const result = getExplorerUrl(path, cluster);

        expect(result).toBe(`https://explorer.solana.com${processedPath}?cluster=devnet`);
        expect(mockGetExplorerPath).toHaveBeenCalledWith(path);
    });

    it('should return the correct URL for local cluster', () => {
        const path = 'address/some-address';
        const cluster: ExplorerUrlCluster = 'local';
        const processedPath = `/${path}`;
        mockGetExplorerPath.mockReturnValue(processedPath);

        const result = getExplorerUrl(path, cluster);

        expect(result).toBe(`https://explorer.solana.com${processedPath}?cluster=custom`);
        expect(mockGetExplorerPath).toHaveBeenCalledWith(path);
    });

    it('should return the correct URL for custom cluster', () => {
        const path = '/custom/some-custom-path';
        const cluster: ExplorerUrlCluster = 'custom';
        mockGetExplorerPath.mockReturnValue(path);

        const result = getExplorerUrl(path, cluster);

        expect(result).toBe(`https://explorer.solana.com${path}?cluster=custom`);
        expect(mockGetExplorerPath).toHaveBeenCalledWith(path);
    });

    it('should handle paths without a leading slash correctly', () => {
        const path = 'stats/some-stats';
        const cluster: ExplorerUrlCluster = 'testnet';
        const processedPath = `/${path}`;
        mockGetExplorerPath.mockReturnValue(processedPath);

        const result = getExplorerUrl(path, cluster);

        expect(result).toBe(`https://explorer.solana.com${processedPath}?cluster=testnet`);
        expect(mockGetExplorerPath).toHaveBeenCalledWith(path);
    });
});
