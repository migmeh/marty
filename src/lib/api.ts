import { Character } from '@/types/character';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3005';

export async function getCharacters(): Promise<Character[]> {
    try {
        const res = await fetch(`${API_URL}/characters`, { cache: 'no-store' });
        if (!res.ok) {
            throw new Error('Error al obtener los datos');
        }
        return res.json();
    } catch (error) {
        // En caso de error, retornamos una lista vacía para no romper la app
        return [];
    }
}
