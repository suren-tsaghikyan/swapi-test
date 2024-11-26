import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCharacters, toggleFavorite } from "../redux/slices/charactersSlice";
import CharacterCard from "../components/characters/CharacterCard";
import styles from "../styles/CharacterCard.module.css";
import axios from "axios";

const CharactersPage = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.list);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchCharacters = async () => {
    const response = await axios.get("https://swapi.dev/api/people/");
    dispatch(setCharacters(response.data.results));
    return response.data.results;
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredList = useMemo(() => {
    return characters.filter((character) =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [characters, searchQuery]);

  useEffect(() => {
    if (!characters.length) fetchCharacters();
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by character name"
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      {filteredList.length > 0 ? (
        filteredList.map((character) => (
          <CharacterCard
            key={character.name}
            character={character}
            onFavoriteToggle={() => dispatch(toggleFavorite(character.name))}
          />
        ))
      ) : (
        <p>No characters found</p>
      )}
    </div>
  );
};

export default CharactersPage;
