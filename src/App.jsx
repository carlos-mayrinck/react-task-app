import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/about";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Edit from "./pages/edit";

function App() {
  const [visibility, setVisibility] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:8000/tasks");
      const data = await res.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  // Delete task
  const onDelete = async (id) => {
    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const onUpdate = async (id) => {
    const taskToToggle = await fetch(`http://localhost:8000/tasks/${id}`);
    const task = await taskToToggle.json();

    const updatedTask = { ...task, reminder: !task.reminder };

    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:8000/tasks/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  // Edit task
  const editTask = async (updatedTask) => {
    const res = await fetch(`http://localhost:8000/tasks/${updatedTask.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(updatedTask)
    });
    const data = await res.json();
    
    setTasks(tasks.map( task => (task.id == updatedTask.id ? data : task) ));
  }

  return (
    <div className="container">
      <Router>
        <Header
          title="Task Tracker"
          onToggle={() => setVisibility(!visibility)}
          visibility={visibility}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {visibility && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={onDelete}
                    handleUpdate={onUpdate}
                  />
                ) : (
                  <p>There is no task to show.</p>
                )}
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/edit/:taskid" element={<Edit handleUpdate={editTask} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
