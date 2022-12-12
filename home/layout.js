import React, {ReactNode} from "react";
import styles from "./Layout.module.scss";
import Logo from "./Logo";
import Footer from "./footer";

export default function Layout(props) {
  return <>
    <nav className={styles.nav}>
      <Logo/>
      <div>
        Coming Soon!
      </div>
    </nav>
    <main className={styles.main}>
      {props.children}
    </main>
    <Footer/>
  </>
}