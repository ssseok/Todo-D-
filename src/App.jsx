import { useState } from "react";

import Todo from "./components/Todo/Todo";
import Nav from "./components/Navbar/Nav";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Nav filters={filters} filter={filter} onFilterChange={setFilter} />
      <Todo filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
