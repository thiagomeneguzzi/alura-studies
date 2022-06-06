import Button from "../button"
import Relogio from "./relogio"
import style from './Cronometro.module.scss'
import { timeToSeconds } from "../../common/utils/time"
import ITask from "../../types/task"
import { useEffect, useState } from "react"

interface Props {
    selected: ITask | undefined ;
    finishTask: () => void
}

export function Cronometro({ selected, finishTask } : Props) {
    const [time, setTime] = useState<number>();
    
    useEffect(() => {
        if(selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    },[selected])

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0) {
                setTime(contador - 1)
                return regressiva(contador - 1)
            }
            finishTask()
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio time={time}></Relogio>
            </div>
            <Button onClick={() => regressiva(time)}>Começar!</Button>
        </div>
    )
}