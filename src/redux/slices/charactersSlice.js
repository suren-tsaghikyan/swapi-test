import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    list: [],
    favorites: [],
    loading: false,
  },
  reducers: {
    setCharacters: (state, action) => {
      state.list = action.payload;
    },
    editCharacterName: (state, action) => {
      const plainArray = JSON.parse(JSON.stringify(state.list));
      const { oldName, newName } = action.payload;
      const characterIndex = plainArray.findIndex(
        (char) => char.name === oldName
      );
      if (characterIndex > -1) {
        plainArray[characterIndex].name = newName;
      }
      state.list = plainArray;
    },
    toggleFavorite: (state, action) => {
      const plainArray = JSON.parse(JSON.stringify(state.list));
      const character = plainArray.find((c) => c.name === action.payload);
      if (character) {
        const isFavorite = state.favorites.find(
          (fav) => fav.name === character.name
        );
        const characterIndex = plainArray.findIndex(
          (char) => char.name === character.name
        );
        if (isFavorite) {
          plainArray[characterIndex].isFavorite = false;
          state.favorites = state.favorites.filter(
            (fav) => fav.name !== character.name
          );
        } else {
          plainArray[characterIndex].isFavorite = true;
          state.favorites.push(character);
        }
        state.list = plainArray;
      }
    },
  },
});

export const { setCharacters, toggleFavorite, editCharacterName } =
  charactersSlice.actions;
export default charactersSlice.reducer;
