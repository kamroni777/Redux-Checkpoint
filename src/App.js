import React from 'react';
import AddTask from './components/AddTask/AddTask';
import ListTask from './components/ListTask/ListTask';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>ToDo App with Redux</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;