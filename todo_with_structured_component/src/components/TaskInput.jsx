import React, { useState } from 'react';

const TaskInput = ({ onTaskAdd }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleTaskAdd = () => {
    if (taskInput.trim()) {
      onTaskAdd(taskInput);
      setTaskInput('');
    }
  };

  return (
    <div className="mb-5">
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
        className="w-full p-3 border rounded mb-3"
      />
      <button
        onClick={handleTaskAdd}
        className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;