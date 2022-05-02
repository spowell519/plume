import styles from "./banner.module.css";
import Image from "next/image";

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.feather}>
        <Image
          src="/plumeFeatherIcon.png"
          alt="triangle with all three sides equal"
          height="300"
          width="700"
        />
      </div>

      <h1 className={styles.title}>
        <span className={styles.title1}>Plume</span>
      </h1>
      <p className={styles.subTitle}>Choose, locate & observe local birds!</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={props.handleOnClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
