import { describe, expect, test } from 'vitest';
import { sumar } from '@/utils/math';

describe('Should sum two numbers', () => {
    test('should return the sum of two numbers', () => {
        // Asert
        const a = 5;
        const b = 7;
        const sum = a + b;

        // Act
        const result = sumar(a, b);

        // Assert
        expect(result).toBe(sum);
    });
    test('should return the sum of negative numbers', () => {
        // Asert
        const a = -5;
        const b = 7;
        const sum = a + b;

        // Act
        const result = sumar(a, b);

        // Assert
        expect(result).toBe(sum);
    });
    test('should return the same number if one of them is 0', () => {
        // Asert
        const a = -5;
        const b = 0;
        const sum = a + b;

        // Act
        const result = sumar(a, b);

        // Assert
        expect(result).toBe(sum);
    });
});
