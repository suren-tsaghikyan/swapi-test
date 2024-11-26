import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "../../styles/Header.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink
          to="/characters"
          className={`${styles.navLink} ${
            location.pathname === "/characters" ? styles.active : ""
          }`}
        >
          Characters
        </NavLink>
        <NavLink
          to="/favorites"
          className={`${styles.navLink} ${
            location.pathname === "/favorites" ? styles.active : ""
          }`}
        >
          Favorites
        </NavLink>
      </nav>
      <button
        className={styles.logoutButton}
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
