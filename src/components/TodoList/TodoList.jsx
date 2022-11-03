import React from "react";
import styles from "./TodoList.module.css";
import { FaTrashAlt } from "react-icons/fa";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    let status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
};

export default TodoList;
