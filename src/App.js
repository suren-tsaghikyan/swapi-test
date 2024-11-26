import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CharactersPage from "./pages/CharactersPage";
import CharacterInfoPage from "./pages/CharacterInfoPage";
import FavoritesPage from "./pages/FavoritesPage";
import Login from "./components/auth/Login";
import styles from "./styles/App.module.css";
import Header from "./components/header/Header";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className={styles.app}>
      {user && <Header />}
      {!user ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/characters" />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:name" element={<CharacterInfoPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
