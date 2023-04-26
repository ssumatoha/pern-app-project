import { useState } from "react"
import { INote } from "../models"

interface NoteProps {
    note: INote
}

export const Note = (props: NoteProps) => {
    const [textState, setTextState] = useState(false)

    const btnStyles = textState ? ' border hover:border-slate-400 text-white bg-blue-400' : ' border hover:border-slate-600 text-white bg-blue-600'
    const resultStyle = ['flex-1 w-32 rounded-full border-solid', btnStyles]

    return(
    <div className="border py-2 px-4 rounded flex flex-col item-center mb-2">
        <div className="flex">
            <h3 className="text-1xl font-bold flex-1 w-64">Заметка номер {props.note.id}</h3>
            <button 
            className={resultStyle.join()}
            onClick={() => setTextState(status => !status)}>
                {!textState ? 'Открыть содержание' : 'Закрыть содержание'}
            </button>
        </div>
        {
            textState && <div>
                {props.note.text}
            </div>
        }
    </div>
    )
}