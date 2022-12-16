import styles from '../styles/components/footer.module.css'
export function Footer() {
    return(
        <footer className={styles.footerContainer}>
            <p className={styles.footerText}> Feito com amor por Lillyan, durante as aulas de ReactJS na Pretalab ♡ </p>
        </footer>
    )
}