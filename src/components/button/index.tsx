import style from './Button.module.scss'

interface Props {
    onClick?: () => void,
    type?: "button" | "submit" | "reset" | undefined,
    children?: React.ReactNode
}

export default function Button({ onClick, type, children } : Props) {
    return (
        <button 
            onClick={onClick} 
            type={type} 
            className={style.botao}
        >
            {children}
        </button>
    )
}
