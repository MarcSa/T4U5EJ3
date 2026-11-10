import type { User } from '@/modules/users/interfaces/user.interface';

export async function getUsers(): Promise<User[]> {
    const response = await fetch('https://api.exemplo.com/users');
    if (!response.ok) {
        throw new Error('Error al obtener los usuarios');
    }
    return response.json();
}
