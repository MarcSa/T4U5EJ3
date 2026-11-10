import { describe, expect, it, vi } from 'vitest';
import { getUsers } from '@/modules/users/services/getUsers';
import type { User } from '@/modules/users/interfaces/user.interface';

describe('taskService.ts', () => {
    it('should return the list of users when the response is correct', async () => {
        // Arrange
        const userMock: User[] = [
            {
                id: 1,
                name: 'Jaume',
            },
            {
                id: 2,
                name: 'Marc',
            },
        ];
        global.fetch = vi.fn<typeof fetch>().mockResolvedValue(
            new Response(JSON.stringify(userMock), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            }),
        );

        // Act
        const resultado = await getUsers();

        // Assert
        expect(resultado).toEqual(userMock);
        expect(fetch).toHaveBeenCalledOnce();
    });
    it('should throw an error when the server response fails', async () => {
        // Arrange
        global.fetch = vi.fn<typeof fetch>().mockResolvedValue(new Response(null, { status: 500 }));
        // Act & Assert
        await expect(getUsers()).rejects.toThrow('Error al obtener los usuarios');
    });
});
