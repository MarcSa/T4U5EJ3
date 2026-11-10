import { describe, expect, test, vi } from 'vitest';
import { getTasks } from '@/services/taskService';

describe('taskService.ts', () => {
    test('should return the task list when valid response', async () => {
        // Arrange
        const tareasMock: Task = [
            {
                id: 1,
                title: 'Aprender Vue',
            },
            {
                id: 2,
                title: 'Aprender Testing',
            },
        ];
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(tareasMock),
            }),
        );

        // Act
        const resultado = await getTasks();

        // Assert
        expect(resultado).toEqual(tareasMock);
        expect(fetch).toHaveBeenCalledOnce();
    });
    test('should throw an error when server fails', async () => {
        // Arrange
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: false,
            }),
        );
        // Act & Assert
        await expect(getTasks()).rejects.toThrow('Error al obtener las tareas');
    });
});
