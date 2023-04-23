import { INote } from "../models"

interface NoteProps {
    note: INote
}

export const Note = (props: NoteProps) => {
    return(
    <div className="border py-2 px-4 rounded flex flex-col item-center mb-2">   
        {props.note.text}
    </div>
    )
}