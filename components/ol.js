import styles from './Ol.module.scss';

export default function Ol({children}) {
    return (
        <ol className={styles.ol}>
            {children}
        </ol>
    );
}