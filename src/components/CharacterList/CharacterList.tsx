'use client'
import { Character } from '@/types/character';
import CharacterCard from '../CharacterCard/CharacterCard';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks'; // Added useAppDispatch
import styles from './CharacterList.module.css';
import SearchBar from '../SearchBar/SearchBar';
import FavoritesModal from '../FavoritesModal/FavoritesModal'; // Import Modal
import { toggleFavorite } from '@/lib/features/favorites/favoritesSlice'; // Import action

interface CharacterListProps {
    characters: Character[];
    onSelect: (character: Character) => void;
    selectedId?: number;
}

export default function CharacterList({ characters, onSelect, selectedId }: CharacterListProps) {
    const [search, setSearch] = useState('');
    const [isFavModalOpen, setIsFavModalOpen] = useState(false); // Modal state instead of filter

    const favorites = useAppSelector((state) => state.favorites.items);
    const dispatch = useAppDispatch(); // Need dispatch to remove favs

    const filtered = characters.filter((c) => {
        const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
        // Removed showFavsOnly filter logic
        return matchesSearch;
    });

    const handleRemoveFavorite = (char: Character) => {
        dispatch(toggleFavorite(char));
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <SearchBar value={search} onChange={setSearch} />
            </div>
            <div className={styles.grid}>
                {filtered.map((char) => (
                    <CharacterCard
                        key={char.id}
                        character={char}
                        onClick={() => onSelect(char)}
                        selected={selectedId === char.id}
                    />
                ))}
                {filtered.length === 0 && (
                    <p className={styles.noResults}>No characters found</p>
                )}
            </div>

            <button
                className={styles.favsButton}
                onClick={() => setIsFavModalOpen(true)}
            >
                FAVS
            </button>

            <FavoritesModal
                isOpen={isFavModalOpen}
                onClose={() => setIsFavModalOpen(false)}
                favorites={favorites}
                onRemove={handleRemoveFavorite}
            />
        </div>
    );
}
