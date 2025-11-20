import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';
import { expect, test, describe } from 'vitest'

describe('useCounter', () => {

    test('should initialize the count to 0', () => {

        const { result } = renderHook(() => useCounter());
        expect(result.current.count).toBe(0);
    });

    test('should increment the count when calling increment', () => {

        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.increment();
        });

        expect(result.current.count).toBe(1);
    });
});
