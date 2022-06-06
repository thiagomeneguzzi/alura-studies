import React, { useState } from "react";
import ITask from "../../types/task";
import Button from "../button";
import style from './Form.module.scss'
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

export default function Form({ setTasks } : Props) {

    const [task, setTask] = useState("")
    const [time, setTime] = useState("00:00")

    function saveTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setTasks((previousTasks) => 
        [
            ...previousTasks,
            {
                task,
                time,
                selected: false,
                completed: false,
                id: uuidv4()
            }
        ])
        setTask("")
        setTime("00:00")
    }

    return (
        <form className={style.novaTarefa} onSubmit={saveTask}>
            <div className={style.inputContainer}>
                <label htmlFor={style.task}>
                    Adicione um novo estudo
                </label>
                <input 
                    type="text" 
                    name="task" 
                    id="task" 
                    value={task}
                    onChange={(event) => setTask(event.target.value)} 
                    placeholder="O que você quer estudar?" 
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">
                    Tempo
                </label>
                <input 
                    type="time" 
                    value={time}
                    onChange={(event) => setTime(event.target.value )} 
                    step="1" 
                    min="00:00:00"
                    max="01:30:00"
                    name="time" 
                    id="time"
                    required
                />
            </div>
            <Button type="submit">Adicionar</Button>
        </form>
    )
}