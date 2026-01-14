import Image from 'next/image';
import { Character } from '@/types/character';
import styles from './CharacterDetail.module.css';

interface CharacterDetailProps {
    character?: Character;
    onNext?: () => void;
    onPrev?: () => void;
}

export default function CharacterDetail({ character, onNext, onPrev }: CharacterDetailProps) {
    if (!character) {
        return (
            <div className={styles.empty}>
                <h2>Select a character to view details</h2>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageSection}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={character.image}
                        alt={character.name}
                        width={600}
                        height={600}
                        className={styles.image}
                        priority
                        style={{ width: '100%', height: '100%' }}
                        suppressHydrationWarning
                        unoptimized
                    />
                </div>
                {onPrev && (
                    <button className={styles.navBtn} style={{ left: 0 }} onClick={onPrev}>
                        ‹
                    </button>
                )}
                {onNext && (
                    <button className={styles.navBtn} style={{ right: 0 }} onClick={onNext}>
                        ›
                    </button>
                )}
                <div className={styles.liveIndicator}>
                    <span className={`${styles.dot} ${character.status === 'Alive' ? styles.alive : styles.dead}`}></span>
                    {character.status === 'Dead' ? 'DEAD' : 'LIVE'}
                </div>

                <div className={styles.infoSection}>
                    <h1 className={styles.name}>{character.name}</h1>
                    <p className={styles.species}>
                        {character.species} {character.type && `• ${character.type}`}
                    </p>

                    <div className={styles.statsGrid}>
                        <div className={styles.statBox}>
                            <label>Origin</label>
                            <span>{character.origin}</span>
                        </div>
                        <div className={styles.statBox}>
                            <label>Location</label>
                            <span>{character.location}</span>
                        </div>
                        <div className={styles.statBox}>
                            <label>Gender</label>
                            <span>{character.gender}</span>
                        </div>
                        <div className={styles.statBox}>
                            <label>Episodes</label>
                            <span>{character.episodes}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
