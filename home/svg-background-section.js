import {ReactNode} from "react";
import Image from "next/image";
import styles from "./SvgBackgroundSection.module.scss";

export default function SvgBackgroundSection(props) {

  return <div className={styles.section}>
    {props.children}
    <Image src={props.src} alt={"Background Image"}/>
  </div>
}