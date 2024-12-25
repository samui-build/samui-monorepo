import { isAddress, isSignature } from '@solana/web3.js';

import { getExplorerPath } from '../get-explorer-path';

jest.mock('@solana/web3.js', () => ({
    isAddress: jest.fn(),
    isSignature: jest.fn(),
}));

describe('getExplorerPath', () => {
    const mockIsAddress = isAddress as jest.MockedFunction<typeof isAddress>;
    const mockIsSignature = isSignature as jest.MockedFunction<typeof isSignature>;

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return input as-is if it contains a slash', () => {
        const input = '/custom/path';

        const result = getExplorerPath(input);

        expect(result).toBe(input);
        expect(mockIsAddress).not.toHaveBeenCalled();
        expect(mockIsSignature).not.toHaveBeenCalled();
    });

    it('should return /address/ with input if it is an address', () => {
        const input = 'some-valid-address';
        mockIsAddress.mockReturnValue(true);
        mockIsSignature.mockReturnValue(false);

        const result = getExplorerPath(input);

        expect(result).toBe(`/address/${input}`);
        expect(mockIsAddress).toHaveBeenCalledWith(input);
        expect(mockIsSignature).not.toHaveBeenCalled();
    });

    it('should return /tx/ with input if it is a signature', () => {
        const input = 'some-valid-signature';
        mockIsAddress.mockReturnValue(false);
        mockIsSignature.mockReturnValue(true);

        const result = getExplorerPath(input);

        expect(result).toBe(`/tx/${input}`);
        expect(mockIsAddress).toHaveBeenCalledWith(input);
        expect(mockIsSignature).toHaveBeenCalledWith(input);
    });

    it('should return /epoch/ for a number less than 1000', () => {
        const input = '500';
        mockIsAddress.mockReturnValue(false);
        mockIsSignature.mockReturnValue(false);

        const result = getExplorerPath(input);

        expect(result).toBe(`/epoch/500`);
        expect(mockIsAddress).toHaveBeenCalledWith(input);
        expect(mockIsSignature).toHaveBeenCalledWith(input);
    });

    it('should return /block/ for a number 1000 or greater', () => {
        const input = '1500';
        mockIsAddress.mockReturnValue(false);
        mockIsSignature.mockReturnValue(false);

        const result = getExplorerPath(input);

        expect(result).toBe(`/block/1500`);
        expect(mockIsAddress).toHaveBeenCalledWith(input);
        expect(mockIsSignature).toHaveBeenCalledWith(input);
    });

    it('should return input as-is if it is not a valid address, signature, or number', () => {
        const input = 'random-string';
        mockIsAddress.mockReturnValue(false);
        mockIsSignature.mockReturnValue(false);

        const result = getExplorerPath(input);

        expect(result).toBe(input);
        expect(mockIsAddress).toHaveBeenCalledWith(input);
        expect(mockIsSignature).toHaveBeenCalledWith(input);
    });
});
