'use client'
import { Character } from '@/types/character';
import CharacterCard from '../CharacterCard/CharacterCard';
import { useState } from 'react';
import { useAppSelector } from '@/lib/hooks';
import styles from './CharacterList.module.css';
import SearchBar from '../SearchBar/SearchBar';

interface CharacterListProps {
    characters: Character[];
    onSelect: (character: Character) => void;
    selectedId?: number;
}

export default function CharacterList({ characters, onSelect, selectedId }: CharacterListProps) {
    const [search, setSearch] = useState('');
    const [showFavsOnly, setShowFavsOnly] = useState(false);

    const favorites = useAppSelector((state) => state.favorites.items);

    const filtered = characters.filter((c) => {
        const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
        const matchesFav = showFavsOnly ? favorites.some(f => f.id === c.id) : true;
        return matchesSearch && matchesFav;
    });

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
                className={`${styles.favsButton} ${showFavsOnly ? styles.activeFavs : ''}`}
                onClick={() => setShowFavsOnly(!showFavsOnly)}
            >
                FAVS
            </button>
        </div>
    );
}
