import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../../redux/actions/taskActions';
import './Task.css';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing && editedDescription.trim()) {
      dispatch(editTask(task.id, editedDescription));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`task ${task.isDone ? 'done' : ''}`}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
        className="task-checkbox"
      />
      
      {isEditing ? (
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span className="task-description">{task.description}</span>
      )}
      
      <div className="task-actions">
        <button onClick={handleEdit} className="edit-button">
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default Task;