import PropTypes from "prop-types";
import styles from "./CharactetItem.module.css";

export default function CharactetItem({ name, description, itemImage }) {
  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.des}>
          {description.length < 1
            ? "If you want to get more information, Please visit https://www.marvel.com"
            : description}
        </p>
      </div>
      <div className={styles.container}>
        <img src={itemImage} alt={name} />
      </div>
    </div>
  );
}

CharactetItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  itemImage: PropTypes.string.isRequired
};
