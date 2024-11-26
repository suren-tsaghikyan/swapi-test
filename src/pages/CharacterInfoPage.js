import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  editCharacterName,
  toggleFavorite,
} from "../redux/slices/charactersSlice";
import styles from "../styles/CharacterDetails.module.css";

const CharacterInfoPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const dispatch = useDispatch();
  const character = useSelector((state) =>
    state.characters.list.find((char) => char.name === name)
  );
  const [newName, setNewName] = useState(character?.name);
  const [editing, setEditing] = useState(false);

  const handleEditName = () => {
    if (editing) {
      navigate("/characters");
      dispatch(editCharacterName({ oldName: character.name, newName }));
    }
    setEditing(!editing);
  };

  if (!character) {
    return <p>Character not found!</p>;
  }

  return (
    <div className={styles.detailsContainer}>
      {editing ? (
        <input
          className={styles.editInput}
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      ) : (
        <h2>{character.name}</h2>
      )}
      <button className={styles.favoriteButton} onClick={handleEditName}>
        {editing ? "Save" : "Edit Name"}
      </button>
      <p>Height: {character.height} cm</p>
      <p>Mass: {character.mass} kg</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Eye Color: {character.eye_color}</p>
      <p>Homeworld: {character.homeworld}</p>
      <button
        className={styles.favoriteButton}
        onClick={() => dispatch(toggleFavorite(character.name))}
      >
        {character.isFavorite ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default CharacterInfoPage;
