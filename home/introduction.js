import styles from "./Introduction.module.scss";
export default function Introduction() {
  return <div className={styles.introduction}>
    Hi, I&apos;m Finn. I make coding videos <br className={styles.lineBreak}/>
    on the <a href="https://youtube.com/@thefullstackdev" className={styles.gradient}>Full Stack</a> channel on <span
    className={styles.youtube}>YouTube</span>.
  </div>
}