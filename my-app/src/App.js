import { useState } from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks"

const App = () => {
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
// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
