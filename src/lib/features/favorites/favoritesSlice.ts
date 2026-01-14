import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Character } from '@/types/character'

interface FavoritesState {
    items: Character[]
}

const initialState: FavoritesState = {
    items: [],
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<Character>) => {
            const exists = state.items.find((item) => item.id === action.payload.id)
            if (exists) {
                state.items = state.items.filter((item) => item.id !== action.payload.id)
            } else {
                state.items.push(action.payload)
            }
        },
    },
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
