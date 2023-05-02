import { useState } from "react"
import { Button } from "./Button"
import axios from 'axios';
import { INote } from "../models";

interface CreateNoteProps {
    onCreate: (note: INote) => void
}

export const CreateNote = ({ onCreate }: CreateNoteProps) => {

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        if (value.trim().length === 0) {
            setError('введите валидное значение')
            return
        }

        const res = await axios.post<INote>('http://localhost:5000/api/note/', {text: `${value}`})
        onCreate(res.data)
    }

    return (
        <form onSubmit={ submitHandler }
        className="">
            <input className="border py-1 px-2 mb-2 w-full outline-0"
            type="text"
            placeholder="Введите текст записи"
            value={value}
            onChange={ event => setValue(event.target.value) }/>
            <Button props={['Добавить','Добавить']}/>
        </form>
    )
}