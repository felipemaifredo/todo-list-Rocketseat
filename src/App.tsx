// Imports
import React, { useState } from 'react';

// CSS
import './App.css';

// Sections/Components
import { Header } from './sections/Header';
import { AddTaskForm } from './components/AddTaskForm';
import { Tasks } from './sections/Tasks';

// Interfaces
interface Task {
  id: number;
  description: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <Header />
      <AddTaskForm setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default App;
