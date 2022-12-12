import styles from './InlineCode.module.scss';

export default function InlineCode({children}) {
    return (
        <code className={styles.inlineCode}>
            {children}
        </code>
    );
}