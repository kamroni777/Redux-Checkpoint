import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/actions/taskActions';
import Task from '../Task/Task';
import './ListTask.css';

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(task => {
    if (filter === 'DONE') return task.isDone;
    if (filter === 'NOT_DONE') return !task.isDone;
    return true;
  });

  return (
    <div className="list-task-container">
      <div className="filter-buttons">
        <button onClick={() => dispatch(setFilter('ALL'))} className={filter === 'ALL' ? 'active' : ''}>
          All
        </button>
        <button onClick={() => dispatch(setFilter('DONE'))} className={filter === 'DONE' ? 'active' : ''}>
          Done
        </button>
        <button onClick={() => dispatch(setFilter('NOT_DONE'))} className={filter === 'NOT_DONE' ? 'active' : ''}>
          Not Done
        </button>
      </div>
      
      <div className="tasks-list">
        {filteredTasks.length === 0 ? (
          <p className="no-tasks">No tasks found</p>
        ) : (
          filteredTasks.map(task => (
            <Task key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
  );
};

export default ListTask;