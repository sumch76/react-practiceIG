import React from 'react';

const TaskList = ({ tasks, onTaskToggle, onTaskDelete }) => {
  return (
    <ul className="list-none p-0">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex items-center mb-3 ${task.completed ? 'line-through text-gray-500' : ''}`}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onTaskToggle(task.id)}
            className="mr-3"
          />
          <span className="flex-1">{task.text}</span>
          <button
            onClick={() => onTaskDelete(task.id)}
            className="ml-3 p-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;