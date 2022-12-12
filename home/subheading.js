import {ReactNode} from "react";
import styles from "./Subheading.module.scss";

export default function Subheading(props) {
  return <div>
    <div style={{
      background: `-webkit-linear-gradient(0deg, ${props.start}, ${props.end})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }} className={styles.subheading}>
      {props.children}
    </div>
  </div>
}