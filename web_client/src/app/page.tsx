"use client";

import { HelloWorld } from "@client/components/HelloWorld";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HelloWorld />
    </main>
  );
}
