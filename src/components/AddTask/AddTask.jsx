import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions/taskActions';
import './AddTask.css';

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDescription.trim()) {
      dispatch(addTask(taskDescription));
      setTaskDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Enter task description..."
        className="task-input"
      />
      <button type="submit" className="add-button">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;