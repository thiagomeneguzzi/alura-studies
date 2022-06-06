import style from './Relogio.module.scss'

interface Props {
    time: number | undefined
}

export default function Relogio({ time = 0 } : Props) {

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [ minuteDozen, minuteUnity ] = String(minutes).padStart(2, "0")
    const [ secondDozen, secondUnity ] = String(seconds).padStart(2, "0")

    return (
        <>
            <span className={style.relogioNumero}>{minuteDozen}</span>
            <span className={style.relogioNumero}>{minuteUnity}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondDozen}</span>
            <span className={style.relogioNumero}>{secondUnity}</span>
        </>
    )
}