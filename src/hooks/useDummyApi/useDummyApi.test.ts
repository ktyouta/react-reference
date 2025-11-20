import { renderHook, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { useDummyApi } from './useDummyApi';

describe('useDummyApi', () => {

    const dummyUser = { id: '1', name: 'John Doe' };

    beforeEach(() => {
        // fetch をモック
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(dummyUser),
            } as Response)
        ) as unknown as typeof fetch;
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    test('initially sets loading to true and user to null', () => {

        const { result } = renderHook(() => useDummyApi('1'));

        expect(result.current.loading).toBe(true);
        expect(result.current.user).toBeNull();
    });

    test('fetches user data and updates state', async () => {

        const { result } = renderHook(() => useDummyApi('1'));

        await waitFor(() => expect(result.current.user).toEqual(dummyUser));

        expect(result.current.loading).toBe(false);
        expect(result.current.user).toEqual(dummyUser);
    });
});
