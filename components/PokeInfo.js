import styles from "../styles/PokeInfo.module.css";

function PokeInfo({ data }) {
  return (
    <div className={styles.pokeInfoContainer}>
      <div className={styles.topHeader}>
        {!data ? (
          <>
            <h1 className={styles.heading}>
              Select a Pokemon
            </h1>
          </>
        ) : (
          <>
            <div className={styles.headerInfo}>
              <h1 className={styles.heading}>{data.name}</h1>
              <p className={styles.number}>#{data.number}</p>
            </div>
          </>
        )}
      </div>
      <div className={styles.bottomContent}>
        {!data ? (
          ""
        ) : (
          <>
            <div className={styles.bottomContainer}>
              <div className={styles.content}>
                <div className={styles.top}>
                  <h1 className={styles.detialName}>{data.name}</h1>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.left}>
                    <img src={data.image} alt='' />
                  </div>
                  <div className={styles.right}>
                    <div className={styles.stats}>
                      <h3>Type: {data.classification}</h3>
                      <h3>
                        Weight: {data.weight.minimum} - {data.weight.maximum}
                      </h3>
                      <h3>
                        Height: {data.height.minimum} - {data.height.maximum}
                      </h3>
                      <h3>SKU #: {data.id}</h3>
                    </div>
                    <div className={styles.infoBox}>
                      <h3>Description:</h3>
                      <p className={styles.description}>
                        {data.name} is a {data.classification}. It can weigh
                        anywhere from {data.weight.minimum} to{" "}
                        {data.weight.maximum}. {data.name}'s can grow anywhere
                        from {data.height.minimum} to {data.height.maximum}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PokeInfo;
