import styles from "./Logo.module.scss";
import Image from "next/image";
import logo from "../assets/logo.svg";

export default function Logo() {
  return <div className={styles.logo}>
    <Image src={logo} alt={"Full Stack Logo"}/>
  </div>
}