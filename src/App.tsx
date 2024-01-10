//Imports
import { useState } from 'react';

//Css
import './App.css'

//Sections
import { Header } from './sections/Header';
import { AddTaskForm } from './components/AddTaskForm';
import { Tasks } from './sections/tasks';

//Components

function App() {
  const [tasks, setTasks] = useState([]); 

  return (
    <>
      <Header />
      <AddTaskForm setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default App;