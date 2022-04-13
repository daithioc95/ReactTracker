import { useState, useEffect } from "react";
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      "day": "Tuesday",
      "id": "85",
      "text": "Clean Bedroom.",
      "reminder": true
    },
    {
      "day": "Wednesday",
      "id": "110",
      "text": "Study French",
      "reminder": false
    },
    {
      "day": "Thursday",
      "id": "70",
      "text": "Grocery Shopping.",
      "reminder": true
    }
  ])

  

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
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask (!showAddTask)}
        showAdd ={showAddTask} />
        
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No Tasks To Show'
              )}
            </>
          )}
        />
        <Route path='/about/' component={About} />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
