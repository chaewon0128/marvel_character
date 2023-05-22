import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CharacterList.module.css";

export default function CharacterList() {
  const [marvels, setMarvels] = useState([]);

  const getMarvels = async () => {
    const json = await (
      await fetch(
        "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
      )
    ).json();

    setMarvels(json.data.results);
    console.log(marvels);
  };
  useEffect(() => {
    getMarvels();
  }, []);
  return (
    <div className={styles.list}>
      {marvels.map((marvel) => (
        <Link to={`/detail/${marvel.id}`}>
          <figure className={styles.item}>
            <div className={styles.container}>
              <img
                src={`${marvel.thumbnail.path}.${marvel.thumbnail.extension}`}
                alt={marvel.name}
              />
            </div>
            <figcaption>{marvel.name}</figcaption>
          </figure>
        </Link>
      ))}
    </div>
  );
}
