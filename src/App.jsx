import { useState } from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  }
  
  function removeTask(indexToRemove) {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div>
      <Header />
      <div className="container">
        <input
          type="text"
          placeholder="Escreva sua Tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button onClick={addTask}>Adicionar</button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => removeTask(index)}>✔️</button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
