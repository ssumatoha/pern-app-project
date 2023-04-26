import { INotesResponse } from "../models"
import { Note } from "./Note"

interface NotesProps {
    notes: INotesResponse
}

export const Notes = (props: NotesProps) => {
    return(
    <div className="border py-2 px-4 rounded flex flex-col item-center mb-2 bg-white">
        <h1 className="text-2xl font-bold text-center">Все заметки</h1>
        {
            props.notes.rows.map((el) => <Note key={el.id} note={el}/> )
        }
    </div>
    )
}