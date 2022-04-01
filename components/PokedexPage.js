import React, { useState } from "react";
import styles from "../styles/PokedexPage.module.css";
import Card from "./Card";
import PokeInfo from "./PokeInfo";

function PokedexPage({ onClick }) {
  const [pokeDex, setPokeDex] = useState();

  return (
    <div className={styles.PokedexPageContainer}>
      <button className={styles.logoutBtn} onClick={onClick}>
        Log Out
      </button>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.leftTop}>
            <Card infoPokemon={(poke) => setPokeDex(poke)} />
          </div>
          <div className={styles.leftBottom}></div>
        </div>
        <div className={styles.right}>
          <PokeInfo data={pokeDex} />
        </div>
      </div>
    </div>
  );
}

export default PokedexPage;
