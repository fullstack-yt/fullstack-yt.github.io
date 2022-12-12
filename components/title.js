import styles from './Title.module.scss';

export default function Title({title}) {
    return (
        <h1 className={styles.title}>
            {title}
        </h1>
    );
}