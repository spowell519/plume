import { useRouter } from "next/router";
import Link from "next/link";
import birdSpeciesData from "../../data/bird-species.json";
import Head from "next/head";
import styles from "../../styles/bird-species.module.css";
import Image from "next/image";
import cls from "classnames";
import dynamic from "next/dynamic";

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      bird: birdSpeciesData.find((birdSpecies) => {
        return birdSpecies.id.toString() === params.id;
      }),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: birdSpeciesData.map((bird) => ({
      params: { id: bird.id.toString() },
    })),
    fallback: true,
  };
}

const Map = dynamic(() => import("../../components/map"), { ssr: false });

const Birds = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.layout}>
      <Head>
        <title>{props.bird.name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{props.bird.name}</h1>
          </div>
          <Image
            src={props.bird.imgUrl}
            width={600}
            height={360}
            className={styles.birdImg}
            alt={props.bird.name}
          ></Image>
        </div>
        
        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            {/* <Image src="" width="24" height="24"/> */}
            <p className={styles.text}>{props.bird.locName}</p>
          </div>
          <div className={styles.iconWrapper}>
            {/* <Image src="" width="24" height="24"/> */}
            <p className={styles.text}>{props.bird.sciName}</p>
          </div>
        </div>
        <Map lat={props.bird.lat} lng={props.bird.lng} />
      </div>
      
    </div>
  );
};

export default Birds;
