import React, { useState } from 'react';
import { Cronometro } from '../components/cronometro';
import Form from '../components/form';
import List from '../components/list';
import ITask from '../types/task';
import style from './App.module.scss'

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Cronometro />
    </div>
  );
}

export default App;
