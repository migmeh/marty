import reducer, { toggleFavorite } from './favoritesSlice'
import { Character } from '@/types/character'

describe('favoritesSlice', () => {
    const mockCharacter: Character = {
        id: 1,
        name: 'Rick Sanchez',
        species: 'Human',
        type: '',
        origin: 'Earth',
        location: 'Earth',
        gender: 'Male',
        episodes: 50,
        status: 'Alive',
        image: 'url'
    }

    test('should return the initial state', () => {
        expect(reducer(undefined, { type: 'unknown' })).toEqual({
            items: [],
        })
    })

    test('should handle adding a favorite', () => {
        const previousState = { items: [] }
        expect(reducer(previousState, toggleFavorite(mockCharacter))).toEqual({
            items: [mockCharacter],
        })
    })

    test('should handle removing a favorite', () => {
        const previousState = { items: [mockCharacter] }
        expect(reducer(previousState, toggleFavorite(mockCharacter))).toEqual({
            items: [],
        })
    })
})
