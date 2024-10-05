"use-client";
import { useState } from "react";
import styles from "styles.module.css";

export default function RistauMessage() {
  const [screen, setScreen] = useState(0);
  if (screen === 0) {
    return (
      <div className={`${styles.centro} ${styles.fonte}`}>
        <h1>Eiii, minha Ristau...</h1>
        <button className={styles.botao} onClick={() => setScreen(1)}>
          O que foi??
        </button>
      </div>
    );
  }
  if (screen === 1) {
    return (
      <div className={`${styles.centro} ${styles.fonte}`}>
        <h1>Quero te contar um segredinho...</h1>
        <button className={styles.botao} onClick={() => setScreen(2)}>
          Eita... O que??
        </button>
      </div>
    );
  }
  if (screen === 2) {
    return (
      <div className={`${styles.centro} ${styles.fonte}`}>
        <h1>Eu... Eu te amo!!! ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️</h1>
      </div>
    );
  }
}
