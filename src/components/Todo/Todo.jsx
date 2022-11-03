import React, { useEffect, useState } from "react";
import styles from "./Todo.module.css";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoList from "../TodoList/TodoList";

export default function Todo({ filter }) {
  const [todos, setTodos] = useState(() => readTodo());
  const handleAdd = (todo) => setTodos((prev) => [...prev, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((el) => (
          <TodoList
            key={el.id}
            todo={el}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <div>
        <TodoAdd onAdd={handleAdd} />
      </div>
    </section>
  );
}
function readTodo() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
