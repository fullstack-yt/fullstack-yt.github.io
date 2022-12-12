import {CSSProperties, ReactNode} from "react";
import styles from "./Heading.module.scss";

export default function Heading(props) {
  return <div style={props.style} className={`${styles.heading} ${styles.offset}`}>
    {props.children}
  </div>
}