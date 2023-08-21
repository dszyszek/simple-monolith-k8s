"use client";

import { HelloWorld, ListSection } from "@client/components/home-page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HelloWorld />
      <ListSection />
    </main>
  );
}
