import styles from "./Visual.module.css";
import characterImg from "../../assets/universe.webp";

export default function Visual() {
  return (
    <div className={styles.visual}>
      <div>
        <h2 className={styles.title}>Find your MARVEL Character</h2>
        <p className={styles.quotes}>
          No hero is born. I will only be made. - Iron man -
        </p>
      </div>

      <div>
        <img className={styles.img} src={characterImg} alt="character" />
      </div>
    </div>
  );
}
