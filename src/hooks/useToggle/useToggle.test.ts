import { renderHook, act } from '@testing-library/react';
import { useToggle } from './useToggle';
import { describe, test, expect } from 'vitest';

describe('useToggle', () => {

    test('initial value is false', () => {

        const { result } = renderHook(() => useToggle());
        expect(result.current.value).toBe(false);
    });

    test('toggle flips the value', () => {

        const { result } = renderHook(() => useToggle());

        act(() => result.current.toggle());
        expect(result.current.value).toBe(true);

        act(() => result.current.toggle());
        expect(result.current.value).toBe(false);
    });

    test('setTrue and setFalse work', () => {

        const { result } = renderHook(() => useToggle());

        act(() => result.current.setTrue());
        expect(result.current.value).toBe(true);

        act(() => result.current.setFalse());
        expect(result.current.value).toBe(false);
    });
});
