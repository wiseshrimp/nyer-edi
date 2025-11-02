import styles from './Logo.module.scss'

const Logo = () => {
    return (
        <div
            className={styles.logo}>
            <img 
                alt="New Yorker logo in white text"
                src="/logo/tny_logo.svg" />
        </div>
    )
}

export default Logo
