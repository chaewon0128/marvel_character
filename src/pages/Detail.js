import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharactetItem from "../components/CharactetItem/CharactetItem";
import Comics from "../components/Comics/Comics";
import styles from "./Deatil.module.css";

export default function Detail() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoaing] = useState(true);

  const { id } = useParams();

  const getMarvel = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();

    setCharacter(json.data.results[0]);
    setLoaing(false);
  };

  useEffect(() => {
    getMarvel();
  }, []);

  return (
    <div>
      {loading ? (
        <p className={styles.loading}>loading..</p>
      ) : (
        <>
          <div
            className={styles.detail}
            style={{ backgroundImage: `url(${character.thumbnail.path}.jpg)` }}
          ></div>
          <CharactetItem
            itemImage={`${character.thumbnail.path}.jpg`}
            name={character.name}
            description={character.description}
          />
          <Comics series={character.series.items} />
        </>
      )}
    </div>
  );
}
