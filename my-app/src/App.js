import { useState } from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            "day": "Gold Romeo Square Hoops",
            "id": "85",
            "text": "Stunning! I love them.",
            "in_stock": "true"
        },
        {
            "day": "Gold Siren Hoops",
            "id": "110",
            "text": "Yummy",
            "in_stock": "false"
        },
        {
            "day": "Half Moon Pearl Earrings",
            "id": "70",
            "text": "Delightful! Dressy without being garish.",
            "in_stock": "true"
        }
    ]
)

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000)+1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, reminder:
      !task.reminder}:task
    )
  )
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask (!showAddTask)}
      showAdd ={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to show'}
    </div>
  );
}

export default App;
