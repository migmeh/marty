'use client'
import styles from './FavoritesModal.module.css';
import { Character } from '@/types/character';
import { useEffect } from 'react';

interface FavoritesModalProps {
    isOpen: boolean;
    onClose: () => void;
    favorites: Character[];
    onRemove: (character: Character) => void;
}

export default function FavoritesModal({ isOpen, onClose, favorites, onRemove }: FavoritesModalProps) {

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        }
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                {/* Header removed per design - "sin el titulo ni el boton de x" */}

                <div className={styles.list}>
                    {favorites.length === 0 ? (
                        <p className={styles.empty}>No favorites yet.</p>
                    ) : (
                        favorites.map(char => (
                            <div key={char.id} className={styles.item}>
                                <span>{char.name}</span>
                                <button
                                    className={styles.deleteButton}
                                    onClick={() => onRemove(char)}
                                    aria-label="Remove from favorites"
                                >
                                    {/* Custom "Ugly" Designer Trash Icon */}
                                    <svg width="25" height="25" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.25 4.875V16.625C13.25 18.558 11.683 20.125 9.75 20.125H5.25C3.317 20.125 1.75 18.558 1.75 16.625V4.875H13.25Z" stroke="white" />
                                        <path d="M2.5 3.625H12.5C13.4317 3.625 14.2123 4.26268 14.4346 5.125H0.56543C0.787655 4.26268 1.56829 3.625 2.5 3.625Z" fill="white" stroke="white" />
                                        <rect x="10.3125" y="7.1875" width="0.625" height="10.625" rx="0.3125" fill="#D9D9D9" stroke="white" strokeWidth="0.625" />
                                        <rect x="7.1875" y="7.1875" width="0.625" height="10.625" rx="0.3125" fill="#D9D9D9" stroke="white" strokeWidth="0.625" />
                                        <rect x="4.0625" y="7.1875" width="0.625" height="10.625" rx="0.3125" fill="#D9D9D9" stroke="white" strokeWidth="0.625" />
                                        <rect x="4.875" y="0.5" width="5.25" height="2.75" fill="#D9D9D9" stroke="white" />
                                    </svg>
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
