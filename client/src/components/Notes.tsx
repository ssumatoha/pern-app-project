import { INotesResponse } from "../models"
import { Button } from "./Button";
import { Note } from "./Note"

interface NotesProps {
    notes: INotesResponse,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const Notes = (props: NotesProps) => {

    return(
    <div
    className="border py-2 px-4 rounded flex flex-col item-center mb-2 bg-white">
        <h1 className="text-2xl font-bold text-center">Все заметки</h1>
        {
            props.notes.rows.map((el) => <Note key={el.id} note={el}/> )
        }
        <button className="border hover:border-slate-600 text-white bg-blue-600 flex-1 w-32 rounded-full border-solid"
        type="submit" onClick={() => {
                props.setModal(status => !status)
            }}>Добавить</button>
    </div>
    )
}