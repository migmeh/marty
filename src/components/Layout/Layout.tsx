import styles from './Layout.module.css';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.container}>
            <div className={styles.logoWrapper}>
                <img
                    src="logo.png"
                    alt="Rick and Morty"
                    className={styles.logo}
                />
            </div>
            <main className={styles.main}>
                {children}
            </main>
            <div className={styles.sideDecoration}></div>
            <div className={styles.characterOverlay}></div>
            <div className={styles.footerGradient}></div>
        </div>
    );
}
