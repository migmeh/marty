export interface Character {
    id: number
    name: string
    species: string
    type: string
    origin: string
    location: string
    gender: string
    episodes: number
    status: 'Alive' | 'Dead' | 'unknown'
    image: string
}
