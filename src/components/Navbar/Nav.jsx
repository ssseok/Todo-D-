import React from "react";
import styles from "./Nav.module.css";
import { HiMoon, HiSun } from "react-icons/hi";
import { useDarkMode } from "../../context/DarkModeContext";

export default function Nav({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <HiMoon />} {darkMode && <HiSun />}
      </button>
      <ul className={styles.filters}>
        {filters.map((el, idx) => (
          <li key={idx}>
            <button
              className={`${styles.filter} ${filter === el && styles.selected}`}
              onClick={() => onFilterChange(el)}
            >
              {el}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
