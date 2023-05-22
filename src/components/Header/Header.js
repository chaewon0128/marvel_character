import styles from "./Header.module.css";
import logoImage from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <h1 className={styles.logo}>
          <img src={logoImage} alt="logo" />
        </h1>
      </Link>
      <form className={styles.search_form}>
        <input type="search" placeholder="Search.." />
        <button type="button">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#c5d0e2" }}
            size="1.5x"
          />
        </button>
      </form>
    </div>
  );
}
