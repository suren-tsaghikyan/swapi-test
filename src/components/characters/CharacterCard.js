import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/CharacterCard.module.css";

const CharacterCard = ({ character, onFavoriteToggle }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <div>
        <h3 onClick={() => navigate(`/characters/${character.name}`)}>
          {character.name}
        </h3>
        <p>Height: {character.height} cm</p>
        <p>Mass: {character.mass} kg</p>
      </div>
      <div>
        <button className={styles.likeButton} onClick={onFavoriteToggle}>
          {character.isFavorite ? "Unlike" : "Like"}
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
