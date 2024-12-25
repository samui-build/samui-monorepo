import { detectSolanaCluster } from '../detect-solana-cluster';
import { getGenesisHash } from '../get-genesis-hash';
import type { SolanaClient } from '../get-solana-client';
import { SolanaConfig } from '../parse-solana-config';

jest.mock('../get-genesis-hash');

const mockGetGenesisHash = getGenesisHash as jest.Mock;

describe('detectSolanaCluster', () => {
    const mockClient: SolanaClient = {} as SolanaClient;

    it('should detect the testnet cluster', async () => {
        mockGetGenesisHash.mockResolvedValue('4uhcVJyU9pJkvQyS88uRDiswHXSCkY3zQawwpjk2NsNY');
        const mockConfig: SolanaConfig = { rpcUrl: 'https://testnet.solana.com' } as SolanaConfig;

        const result = await detectSolanaCluster({ client: mockClient, config: mockConfig });

        expect(result).toEqual({
            cluster: 'testnet',
            genesisHash: '4uhcVJyU9pJkvQyS88uRDiswHXSCkY3zQawwpjk2NsNY',
        });
        expect(mockGetGenesisHash).toHaveBeenCalledWith({ client: mockClient });
    });

    it('should detect the mainnet cluster', async () => {
        mockGetGenesisHash.mockResolvedValue('5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc147dw2N9d');
        const mockConfig: SolanaConfig = { rpcUrl: 'https://mainnet.solana.com' } as SolanaConfig;

        const result = await detectSolanaCluster({ client: mockClient, config: mockConfig });

        expect(result).toEqual({
            cluster: 'mainnet',
            genesisHash: '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc147dw2N9d',
        });
        expect(mockGetGenesisHash).toHaveBeenCalledWith({ client: mockClient });
    });

    it('should detect the devnet cluster', async () => {
        mockGetGenesisHash.mockResolvedValue('EtWTRABZaYq6iMfeYKouRu166VU2xqa1wcaWoxPkrZBG');
        const mockConfig: SolanaConfig = { rpcUrl: 'https://devnet.solana.com' } as SolanaConfig;

        const result = await detectSolanaCluster({ client: mockClient, config: mockConfig });

        expect(result).toEqual({
            cluster: 'devnet',
            genesisHash: 'EtWTRABZaYq6iMfeYKouRu166VU2xqa1wcaWoxPkrZBG',
        });
        expect(mockGetGenesisHash).toHaveBeenCalledWith({ client: mockClient });
    });

    it('should detect the local cluster', async () => {
        mockGetGenesisHash.mockResolvedValue('random-local-hash');
        const mockConfig: SolanaConfig = { rpcUrl: 'http://localhost:8899' } as SolanaConfig;

        const result = await detectSolanaCluster({ client: mockClient, config: mockConfig });

        expect(result).toEqual({
            cluster: 'local',
            genesisHash: 'random-local-hash',
        });
        expect(mockGetGenesisHash).toHaveBeenCalledWith({ client: mockClient });
    });

    it('should detect the custom cluster', async () => {
        mockGetGenesisHash.mockResolvedValue('random-custom-hash');
        const mockConfig: SolanaConfig = { rpcUrl: 'https://custom-solana.com' } as SolanaConfig;

        const result = await detectSolanaCluster({ client: mockClient, config: mockConfig });

        expect(result).toEqual({
            cluster: 'custom',
            genesisHash: 'random-custom-hash',
        });
        expect(mockGetGenesisHash).toHaveBeenCalledWith({ client: mockClient });
    });
});
