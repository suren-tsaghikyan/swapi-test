import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../redux/slices/charactersSlice";
import CharacterCard from "../components/characters/CharacterCard";
import styles from "../styles/Favorites.module.css";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.characters.favorites);
  const dispatch = useDispatch();

  return (
    <div className={styles.favoritesContainer}>
      <h1>Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className={styles.emptyMessage}>No favorites added yet!</p>
      ) : (
        <div className={styles.favoritesList}>
          {favorites.map((character) => (
            <CharacterCard
              key={character.name}
              character={character}
              onFavoriteToggle={() => dispatch(toggleFavorite(character.name))}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
