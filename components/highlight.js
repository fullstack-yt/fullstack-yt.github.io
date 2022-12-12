import styles from './Highlight.module.scss';

export default function Highlight({children}) {
    return (
        <span className={styles.highlight}>
            {children}
        </span>
    );
}