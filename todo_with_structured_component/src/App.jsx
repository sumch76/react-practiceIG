import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import { getSavedTasks, saveTasksToLocalStorage } from './utils/localStorage';

const App = () => {
  const [tasks, setTasks] = useState(getSavedTasks);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const addNewTask = (taskText) => {
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
    );
  };

  return (
    <div className="p-5 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-5">To-Do App</h1>
      <TaskInput onTaskAdd={addNewTask} />
      <TaskList tasks={tasks} onTaskToggle={toggleTaskCompletion} onTaskDelete={removeTask} />
    </div>
  );
};

export default App;