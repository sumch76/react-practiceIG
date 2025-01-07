import React, { useState, useEffect } from 'react';

import { getSavedTasks, savedToLocalStorage } from './localStorage';
import './index.css';
const App = () => {
  const [tasks, setTasks] = useState(getSavedTasks);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    savedToLocalStorage(tasks);
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now, text: newTask, completed: false }]);
      setNewTask('');
    }
  };
  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="p-5 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-5">To Do App</h1>
      <div className="mb-5">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="add a new task.."
          className="w-full p-3 border rounded mb-3"
        />
        <button
          onClick={handleAddTask}
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
      <ul className="list-none p-0">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center mb-3 ${
              task.completed ? 'line-through text-gray-500' : ' '
            }`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
              className="mr-3"
            />
            <span className="flex-1">{task.text}</span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="p-2 bg-red-500 text-white rounded hover:bg-red-600 ml-3"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
