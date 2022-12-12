import styles from './CodeHeading.module.scss';

export default function CodeHeading({children}) {
    return (
        <h3 className={styles.codeHeading}>
            {children}
        </h3>
    );
}