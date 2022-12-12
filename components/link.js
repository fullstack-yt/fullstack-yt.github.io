import styles from './Link.module.scss';

export default function Link({children, href}) {
    return (
        <a className={styles.link} href={href}>
            {children}
        </a>
    );
}