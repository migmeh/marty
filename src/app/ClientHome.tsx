'use client'
import { useState } from 'react'
import Layout from '@/components/Layout/Layout'
import CharacterList from '@/components/CharacterList/CharacterList'
import CharacterDetail from '@/components/CharacterDetail/CharacterDetail'
import { Character } from '@/types/character'

export default function ClientHome({ initialCharacters }: { initialCharacters: Character[] }) {
    const [selectedChar, setSelectedChar] = useState<Character | undefined>(initialCharacters[0])

    const handleNext = () => {
        if (!selectedChar) return;
        const currentIndex = initialCharacters.findIndex(c => c.id === selectedChar.id);
        const nextIndex = (currentIndex + 1) % initialCharacters.length;
        setSelectedChar(initialCharacters[nextIndex]);
    };

    const handlePrev = () => {
        if (!selectedChar) return;
        const currentIndex = initialCharacters.findIndex(c => c.id === selectedChar.id);
        const prevIndex = (currentIndex - 1 + initialCharacters.length) % initialCharacters.length;
        setSelectedChar(initialCharacters[prevIndex]);
    };

    return (
        <Layout>
            <CharacterDetail
                character={selectedChar}
                onNext={handleNext}
                onPrev={handlePrev}
            />
            <CharacterList
                characters={initialCharacters}
                onSelect={setSelectedChar}
                selectedId={selectedChar?.id}
            />
        </Layout>
    )
}
