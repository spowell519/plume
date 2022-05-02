import { useState } from "react";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner";
import Card from "../components/card";
import birdSpeciesData from "../data/bird-species.json";

export async function getStaticProps() {
  return {
    props: {
      birdSpecies: birdSpeciesData,
    },
  };
}

export default function Home(props) {
  const [displayBirds, setDisplayBirds] = useState(false);

  const handleOnBannerBtnClick = () => {
    setDisplayBirds(!displayBirds);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Banner buttonText="Search" handleOnClick={handleOnBannerBtnClick} />
        {displayBirds && (
          <>
            <h2 className={styles.heading2}>Bird Species in Your Area</h2>
            <div className={styles.cardLayout}>
              {props.birdSpecies.map((birdSpecies) => {
                return (
                  <Card
                    key={birdSpecies.id}
                    name={birdSpecies.name}
                    imgUrl={birdSpecies.imgUrl}
                    href={`/birds/${birdSpecies.id}`}
                    className={styles.card}
                  />
                );
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
