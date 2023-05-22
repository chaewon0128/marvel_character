import styles from "./Comics.module.css";

export default function Comics({ series }) {
  return (
    <ul className={styles.list}>
      {series.map((s) => (
        <li key={s.name}>{s.name}</li>
      ))}
    </ul>
  );
}
