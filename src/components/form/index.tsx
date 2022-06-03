import React from "react";
import ITask from "../../types/task";
import Button from "../button";
import style from './Form.module.scss'
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {

    state = {
        task: "",
        time: ""
    }

    saveTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        this.props.setTasks((previousTasks) => 
        [
            ...previousTasks,
            {
                ...this.state,
                selected: false,
                completed: false,
                id: uuidv4()
            }
        ])
        this.setState({
            task: "", 
            time: ""
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.saveTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor={style.task}>
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text" 
                        name="task" 
                        id="task" 
                        value={this.state.task}
                        onChange={(event) => this.setState({ ...this.state, task: event.target.value })} 
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
                        value={this.state.time}
                        onChange={(event) => this.setState({ ...this.state, time: event.target.value })} 
                        step="1" 
                        name="time" 
                        id="time"
                        required
                    />
                </div>
                <Button type="submit">Adicionar</Button>
            </form>
        )
    }

} 

export default Form;