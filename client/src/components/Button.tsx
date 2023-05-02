import { useState } from "react"

interface IButton {
    props: string[],
}

export const Button = ( { props }: IButton) => {

    const [textState, setTextState] = useState(false)

    const btnStyles = textState ? ' border hover:border-slate-400 text-white bg-blue-400' : ' border hover:border-slate-600 text-white bg-blue-600'
    const resultStyle = ['flex-1 w-32 rounded-full border-solid', btnStyles]

    return (
        <button type="submit"
            className={resultStyle.join()}
            onClick={() => {
                setTextState(status => !status)
            }}>
                {!textState ? props[0] : props[1]}
            </button>
    )
}