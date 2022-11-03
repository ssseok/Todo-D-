import React, { useState } from "react";
import styles from "./TodoAdd.module.css";
import { v4 as uuidv4 } from "uuid";

export default function TodoAdd({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add Todo"
        id="todo"
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
